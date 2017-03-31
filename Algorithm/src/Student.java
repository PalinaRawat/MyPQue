/**
 * Created by akshatgoyal on 3/30/17.
 */

enum Stadings {
    FRESHMEN, SOPHOMORE, JUNIOR, SENIOR, GRADUATE
};

public class Student {

    // Profile Stuff
    private int ID;
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
    private boolean createPrefernces(Company companies[]) {
        return true;
    }


    /**
     *
     * Updates the student preferences. Called in Company update method.
     */
    private boolean updatePreferences() {
        return true;
    }


}
