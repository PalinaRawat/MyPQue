import java.util.ArrayList;
import java.util.Hashtable;

/**
 * Created by akshatgoyal on 3/30/17.
 */
public class QueuePosition {

    public static Hashtable<Integer, Company> c;
    public static Hashtable<Integer, Student> s;

    public static void sets(Hashtable<Integer, Student> stud){
        s = stud;
    }
    public static void setc(Hashtable<Integer, Company> comp){
        c = comp;
    }


    private int currentPreference;      // Current queue
    private int firstPreference;        // First chosen queue
    private int companyID;
    private int studentID;
    private double timeRemaining;

    public QueuePosition(int firstPreference, int companyID, int studentID) {
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

    public int getCompanyID() {
        return companyID;
    }

    public void setCompanyID(int companyID) {
        this.companyID = companyID;
    }

    public int getStudentID() {
        return studentID;
    }

    public void setStudentID(int studentID) {
        this.studentID = studentID;
    }

    public double getTimeRemaining() {
        return timeRemaining;
    }

    public void setTimeRemaining(double timeRemaining) {
        this.timeRemaining = timeRemaining;
    }

    public Company getCompany(int id) {
       // return new Company(id);

        return c.get(id);

//        for (Company company: c) {
//            if(company.getCompanyID() == id)
//                return company;
//        }
//        System.out.println("error2 : no company");
//        return null;
    }

    public Student getStudent(int ID){

        return s.get(ID);

//        for (Student student: s) {
//            if(student.getID() == ID)
//                return student;
//        }
//        System.out.println("error1 : no student");
//        return null;
    }




}
