import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/**
 * Created by akshatgoyal on 3/30/17.
 */
public class CompanyQueue {

    private int timePerStudent = 1;
    private ArrayList<QueuePosition> currentlySpeaking;
    private Queue<QueuePosition>[] queues;
    private int[] numDummiesInQueue;
    private int numberOfQueues = 5;
    private int numOfAllowedDummies = 5;

    public CompanyQueue(int numRecruiters) {
        currentlySpeaking = new ArrayList<QueuePosition>();
        this.queues = new Queue[numberOfQueues];
        for (int i = 0; i < numberOfQueues; i++) {
            queues[i] = new LinkedList<QueuePosition>();
        }
        numDummiesInQueue = new int[numOfAllowedDummies];
    }

    public int getTimePerStudent() {
        return timePerStudent;
    }

    public void setTimePerStudent(int timePerStudent) {
        this.timePerStudent = timePerStudent;
    }

    public ArrayList<QueuePosition> getCurrentlySpeaking() {
        return currentlySpeaking;
    }

    public void setCurrentlySpeaking(ArrayList<QueuePosition> currentlySpeaking) {
        this.currentlySpeaking = currentlySpeaking;
    }

    public int[] getNumDummiesInQueue() {
        return numDummiesInQueue;
    }

    public void setNumDummiesInQueue(int[] numDummiesInQueue) {
        this.numDummiesInQueue = numDummiesInQueue;
    }

    public Queue<QueuePosition>[] getQueues() {
        return queues;
    }

    public void setQueues(Queue<QueuePosition>[] queues) {
        this.queues = queues;
    }

    public int getNumOfAllowedDummies() {
        return numOfAllowedDummies;
    }

    public void setNumOfAllowedDummies(int numOfAllowedDummies) {
        this.numOfAllowedDummies = numOfAllowedDummies;
    }

    public int getNumberOfQueues() {
        return numberOfQueues;
    }

    public void setNumberOfQueues(int numberOfQueues) {
        this.numberOfQueues = numberOfQueues;
    }

    public boolean insertInCompany(QueuePosition position) {
        position.setTimeRemaining(queues[position.getCurrentPreference()].size()*timePerStudent);
        queues[position.getCurrentPreference()].add(position);
        return true;
    }

    public boolean removeAndInsertInCompany(QueuePosition position, int newPosition) {

        if (newPosition == -1) {
            queues[position.getFirstPreference()].remove(position);
            return true;
        }
        queues[position.getFirstPreference()].remove(position);
        queues[newPosition].add(position);
        position.setTimeRemaining(queues[newPosition].size()*timePerStudent);
        return true;

    }

    public int timeRemaing(QueuePosition position) {
        int i = indexOf(position);
        if (i != -1) {
            return i*timePerStudent;
        }
        return -1;
    }

    private int indexOf(QueuePosition position) {
        int i = 0;
        for (QueuePosition p: queues[position.getCurrentPreference()]) {
            if (p == position) {
                return i;
            } else {
                i++;
            }
        }
        return -1;
    }

    public boolean dequeueQueuePosition() {

        if (queues[0].isEmpty()) {
            return false;
        }

        QueuePosition qp = queues[0].poll();
        currentlySpeaking.add(qp);
        return true;
    }

    public boolean removeFromSpeaking(QueuePosition qp) {

        for (QueuePosition q: currentlySpeaking) {
            if (q == qp) {
                currentlySpeaking.remove(qp);
                break;
            }
        }
        return true;
    }


    public void displayCompanyQueue(int companyID){

        System.out.println("Company # " + companyID);
        System.out.print("Current :\t");
        for (QueuePosition qp: currentlySpeaking) {
            Student temp = qp.getStudent(qp.getStudentID());
            System.out.print(temp.getID() + ", ");
        }

        System.out.println();
        for (int i = 0; i < queues.length; i++) {
            System.out.print("q" + i + " :\t");
            for (QueuePosition q : queues[i]) {
                Student temp = q.getStudent(q.getStudentID());
                //temp.displayProfile();
                System.out.print(temp.getID() + ", ");
            }
            System.out.println();
        }

    }
}
