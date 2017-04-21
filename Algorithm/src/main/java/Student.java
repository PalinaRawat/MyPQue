import sun.font.ScriptRun;

import java.util.ArrayList;
import java.util.Hashtable;

/**
 * Created by akshatgoyal on 3/30/17.
 */

enum Standings {
    FRESHMEN, SOPHOMORE, JUNIOR, SENIOR, GRADUATE
};

public class Student {

    static Hashtable<Integer, Student> s;
    static Hashtable<Integer, Company> c;

    public static void sets(Hashtable<Integer, Student> stud) {
        s = stud;
    }
    public static void setc(Hashtable<Integer, Company> comp) {
        c = comp;
    }

    // Student ID
    private int ID;

    // Profile Stuff
    private String firstName;
    private String lastName;
    private String fullName;
    private String major;
    private Standings standing;
    private int gradYear;
    private String resumeLink;

    // Positions
    private QueuePosition queuePositions[];
    int numPreferences = 5;
    double thresholdTime = 1;


    public Student(int ID, String firstName, String lastName, String major, Standings standing, int gradYear, String resumeLink) {
        this.ID = ID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.major = major;
        this.standing = standing;
        this.gradYear = gradYear;
        this.resumeLink = resumeLink;
        this.queuePositions = new QueuePosition[numPreferences];
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public Standings getStading() {
        return standing;
    }

    public void setStading(Standings stading) {
        this.standing = standing;
    }

    public int getGradYear() {
        return gradYear;
    }

    public void setGradYear(int gradYear) {
        this.gradYear = gradYear;
    }

    public String getResumeLink() {
        return resumeLink;
    }

    public void setResumeLink(String resumeLink) {
        this.resumeLink = resumeLink;
    }

    public QueuePosition[] getQueuePositions() {
        return queuePositions;
    }

    public void setQueuePositions(QueuePosition[] queuePositions) {
        this.queuePositions = queuePositions;
    }


    public static Company getCompany(int id) {
        // return new Company(id);

        return c.get(id);

//        for (Company company: c) {
//            if(company.getCompanyID() == id)
//                return company;
//        }
//        System.out.println("error2 : no company");
//        return null;
    }

    public static Student getStudent(int ID){

        return s.get(ID);

//        for (Student student: s) {
//            if(student.getID() == ID)
//                return student;
//        }
//        System.out.println("error1 : no student");
//        return null;
    }

    /**
     * Initiates queuePositions for students and add student to the company queues.
     */
    public boolean createPrefernces(Company preferredCompanies[]) {

        initQueuePositions(preferredCompanies);
        insertInCompanies(this.queuePositions, preferredCompanies);


        return true;
    }

    public boolean initQueuePositions(Company preferredCompanies[]) {
        try {
            for (int i = 0; i < preferredCompanies.length; i++) {
                queuePositions[i] = new QueuePosition(i, preferredCompanies[i].getCompanyID(), this.getID());
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            return false;
        }
        return true;
    }

    public boolean insertInCompanies(QueuePosition positions[], Company preferredCompanies[]) {

        for (int i = 0; i < positions.length; i++) {
            preferredCompanies[i].getCompanyQueue().insertInCompany(positions[i]);
        }
        return true;
    }


    /**
     * Updates the student preferences. Called in Company update method.
     */
    public boolean updatePreferences() {

        int preferrenceDequeued = 0;
        for (int i = 1; i < queuePositions.length; i++) {
            if (queuePositions[i] != null) {
                if (queuePositions[i].getCurrentPreference() == 0) {
                    preferrenceDequeued = i;
                    break;
                }
            }
        }

        for (int i = preferrenceDequeued; i < queuePositions.length - 1; i++) {
            if (queuePositions[i+1] != null) {
                queuePositions[i] = queuePositions[i+1];
                queuePositions[i+1] = null;
                queuePositions[i].setCurrentPreference(i, false);

            } else {
                queuePositions[i] = null;
                break;
            }
        }



        return true;
    }


    public boolean optimize() {

        //Threshold time
        double scheduledWaitTime = queuePositions[0].getTimeRemaining() - thresholdTime;
        if (scheduledWaitTime <= 0) {
            System.out.println("Unable to Optimize - About to speak. Jahan khada hai khade rah mc.");
            return false;
        }

        //Check times for all other companies
        QueuePosition opt = null;
        for (int i = 1; i < numPreferences; i++) {
            if (queuePositions[i] != null) {
                Company temp = getCompany(queuePositions[i].getCompanyID());
                double timeInTempQ0 = temp.getCompanyQueue().getQueues()[0].size()*temp.getCompanyQueue().getTimePerStudent();
                if (scheduledWaitTime >= timeInTempQ0) {
                    opt = queuePositions[i];
                    break;
                }
            }
        }

        // change queue positions
        if (opt != null) {
            Company c = opt.getCompany(opt.getCompanyID());
            // Check dummy students
            if (c.getCompanyQueue().getNumDummiesInQueue()[0] < c.getCompanyQueue().getNumOfAllowedDummies()) {
                opt.setCurrentPreference(0, true);
                System.out.println("Optimized - moved from " + opt.getFirstPreference() + " to "+ opt.getCurrentPreference());
                return true;
            } else {
                System.out.println("Unable to Optimize - Full Dummies. Jahan khada hai khade rah mc.");
                return false;
            }
        } else {
            System.out.println("Unable to Optimize - No company time valid. Jahan khada hai khade rah mc.");
            return false;
        }
    }

    public boolean addAnotherPreferrence(Company company) {

        if (queuePositions[numPreferences - 1] != null) {
            System.out.println("Pahle dequeue to kar mc.");
            return false;
        }

        queuePositions[numPreferences - 1] = new QueuePosition(numPreferences - 1, company.getCompanyID(), this.getID());
        return true;
    }


    public void displayProfile(){
        String out = "";
        out += this.getID() + "\t";
        for (int i = 0; i < queuePositions.length; i++) {
            if(queuePositions[i] != null)
                out += queuePositions[i].getCompanyID() +" ("+ queuePositions[i].getCurrentPreference() + ")"+"\t";
            else
                out +=  "null\t";
        }
        System.out.println(out);
    }

}
