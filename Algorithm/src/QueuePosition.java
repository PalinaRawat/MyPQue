/**
 * Created by akshatgoyal on 3/30/17.
 */
public class QueuePosition {

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

    public void setCurrentPreference(int currentPreference) {
        this.currentPreference = currentPreference;
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
}
