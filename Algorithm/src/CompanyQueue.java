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

    public CompanyQueue() {
        currentlySpeaking = new ArrayList<>();
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

    


}
