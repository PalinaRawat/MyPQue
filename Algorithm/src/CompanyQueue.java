import javax.management.remote.SubjectDelegationPermission;
import javax.swing.plaf.synth.SynthTextAreaUI;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/**
 * Created by akshatgoyal on 3/30/17.
 */
public class CompanyQueue {

    private int timePerStudent = 3;
    private ArrayList<QueuePosition> currentlySpeaking;
    private Queue<QueuePosition>[] queues;
    int numberOfQueues = 5;

    public CompanyQueue(int numRecruiters) {
        currentlySpeaking = new ArrayList<QueuePosition>();
        this.queues = new Queue[numberOfQueues];
        for (int i = 0; i < numberOfQueues; i++) {
            queues[i] = new LinkedList<QueuePosition>();
        }
    }

    public boolean insertInCompany(QueuePosition position) {
        position.setTimeRemaining(queues[position.getCurrentPreference()].size()*timePerStudent);
        queues[position.getCurrentPreference()].add(position);
        return true;
    }

    public boolean removeAndInsertInCompany(QueuePosition position, int newPosition) {

        if (newPosition == -1) {
            queues[position.getCurrentPreference()].remove(position);
            return true;
        }
        queues[position.getCurrentPreference()].remove(position);
        queues[newPosition].add(position);
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
