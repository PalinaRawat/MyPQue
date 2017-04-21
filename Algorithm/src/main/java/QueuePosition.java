import java.util.ArrayList;
import java.util.Hashtable;

/**
 * Created by akshatgoyal on 3/30/17.
 */
public class QueuePosition {

    public static Hashtable<String, Company> c;
    public static Hashtable<String, Student> s;

    public static void sets(Hashtable<String, Student> stud){
        s = stud;
    }
    public static void setc(Hashtable<String, Company> comp){
        c = comp;
    }


    private int currentPreference;      // Current queue
    private int firstPreference;        // First chosen queue
    private String companyID;
    private String studentID;
    private int timeRemaining;

    public QueuePosition(int firstPreference, String companyID, String studentID) {
        this.currentPreference = firstPreference;
        this.firstPreference = firstPreference;
        this.companyID = companyID;
        this.studentID = studentID;
    }

    public int getFirstPreference() {
        return firstPreference;
    }

    public void setFirstPreference(int firstPreference) {
        this.firstPreference = firstPreference;
    }

    public int getCurrentPreference() {
        return currentPreference;
    }

    public void setCurrentPreference(int currentPreference, boolean fromOPT) {
        Company company = getCompany(this.companyID);
        this.currentPreference = currentPreference;
        if (!fromOPT) {
            company.getCompanyQueue().removeAndInsertInCompany(this, this.currentPreference);
            this.firstPreference = currentPreference;
        } else {
            company.getCompanyQueue().removeAndInsertInCompany(this, 0);
            company.getCompanyQueue().getNumDummiesInQueue()[0]++;
        }

    }

    public String getCompanyID() {
        return companyID;
    }

    public void setCompanyID(String companyID) {
        this.companyID = companyID;
    }

    public String getStudentID() {
        return studentID;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    public int getTimeRemaining() {
        return timeRemaining;
    }

    public void setTimeRemaining(int timeRemaining) {
        this.timeRemaining = timeRemaining;
    }

    public Company getCompany(String id) {
       // return new Company(id);

        return c.get(id);

//        for (Company company: c) {
//            if(company.getCompanyID() == id)
//                return company;
//        }
//        System.out.println("error2 : no company");
//        return null;
    }

    public Student getStudent(String ID){

        return s.get(ID);

//        for (Student student: s) {
//            if(student.getID() == ID)
//                return student;
//        }
//        System.out.println("error1 : no student");
//        return null;
    }




}
