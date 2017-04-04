/**
 * Created by akshatgoyal on 3/30/17.
 */
public class Company {

    private int CompanyID;
    private CompanyQueue companyQueue;

    public CompanyQueue getCompanyQueue() {
        return companyQueue;
    }

    public void setCompanyQueue(CompanyQueue companyQueue) {
        this.companyQueue = companyQueue;
    }

    public int getCompanyID() {
        return CompanyID;
    }

    public void setCompanyID(int companyID) {
        CompanyID = companyID;
    }
}
