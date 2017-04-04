import java.awt.event.ComponentAdapter;

/**
 * Created by akshatgoyal on 3/30/17.
 */

enum Stadings {
    FRESHMEN, SOPHOMORE, JUNIOR, SENIOR, GRADUATE
};

public class Student {

    // Student ID
    private int ID;

    // Profile Stuff
    private String firstName;
    private String lastName;
    private String fullName;
    private String major;
    private Stadings stading;
    private int gradYear;
    private String resumeLink;

    // Positions
    private QueuePosition queuePositions[];

    public Student(int ID, String firstName, String lastName, String major, Stadings stading, int gradYear, String resumeLink) {
        this.ID = ID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.major = major;
        this.stading = stading;
        this.gradYear = gradYear;
        this.resumeLink = resumeLink;
        this.queuePositions = new QueuePosition[5];
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

    public Stadings getStading() {
        return stading;
    }

    public void setStading(Stadings stading) {
        this.stading = stading;
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

        for (int i = 0; i < queuePositions.length; i++) {
            if (queuePositions[i+1] != null) {
                queuePositions[i] = queuePositions[i+1];
                queuePositions[i].setCurrentPreference(i);
            } else {
                queuePositions[i] = null;
                break;
            }
        }



        return true;
    }


}
