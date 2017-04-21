/**
 * Created by akshatgoyal on 3/30/17.
 */
public class Company {

    private String companyID;
    private CompanyQueue companyQueue;
    int numRecruiters = 3;

    public Company(String companyID) {
        this.companyID = companyID;
        this.companyQueue = new CompanyQueue(numRecruiters);
    }

    public CompanyQueue getCompanyQueue() {
        return companyQueue;
    }

    public void setCompanyQueue(CompanyQueue companyQueue) {
        this.companyQueue = companyQueue;
    }

    public String getCompanyID() {
        return companyID;
    }

    public void setCompanyID(String companyID) {
        companyID = companyID;
    }

    public boolean dequeue() {
        return companyQueue.dequeueQueuePosition();
    }

    public boolean update(String studentID) {
        Student s = Student.getStudent(studentID);

        int qpToRemove = 0;
        QueuePosition[] qp = s.getQueuePositions();
        for (int i = 1; i < qp.length; i++) {
            if (qp[i] != null) {
                if (qp[i].getCurrentPreference() == 0) {
                    qpToRemove = i;
                    break;
                }
            }
        }


        companyQueue.removeFromSpeaking(qp[qpToRemove]);
        s.updatePreferences();
        return true;
    }

    public void displayCompany(){
        companyQueue.displayCompanyQueue(this.getCompanyID());
    }

}
