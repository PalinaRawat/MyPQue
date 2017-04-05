/**
 * Created by akshatgoyal on 3/30/17.
 */
public class Company {

    private int companyID;
    private CompanyQueue companyQueue;
    int numRecruiters = 3;

    public Company(int companyID) {
        this.companyID = companyID;
        this.companyQueue = new CompanyQueue(numRecruiters);
    }

    public CompanyQueue getCompanyQueue() {
        return companyQueue;
    }

    public void setCompanyQueue(CompanyQueue companyQueue) {
        this.companyQueue = companyQueue;
    }

    public int getCompanyID() {
        return companyID;
    }

    public void setCompanyID(int companyID) {
        companyID = companyID;
    }

    public boolean dequeue() {
        return companyQueue.dequeueQueuePosition();
    }

    public boolean update(int studentID) {
        Student s = Student.getStudent(studentID);
        QueuePosition qp = s.getQueuePositions()[0];
        companyQueue.removeFromSpeaking(qp);
        s.updatePreferences();
        return true;
    }

    public void displayCompany(){
        companyQueue.displayCompanyQueue(this.getCompanyID());
    }

}
