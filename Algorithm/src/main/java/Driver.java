import javax.print.attribute.standard.Media;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.awt.event.ComponentAdapter;
import java.lang.reflect.Array;
import java.util.*;


/**
 * Created by akshatgoyal on 4/3/17.
 */
@Path("server")
public class Driver {

    static Hashtable<String, Company> companies;
    static Hashtable<String, Student> students;

    //Student Methods

    /**
     * Apparently FormParam only parses strings which I found after hours of debugging and innovation
     * So this method takes the json fields as strings, parses them accordingly int & list<integer> and etc etc...
     *
     * @return - should be true/false according to whether preferences are successfully created
     * */
    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Path("/create")
    public boolean create(@FormParam("student") String string_id, @FormParam("companies") String comps){
        boolean debug = true;

        comps = comps.substring(1,comps.length()-1);
        if (debug)
            System.out.println(comps);
        String[] arr = comps.split(",");


        Student s2 = new Student(string_id, "", "", "", null, Integer.parseInt(string_id), "");
        students.put(string_id, s2);
        Student.sets(students);
        Company com[] = new Company[arr.length];
        for (int j = 0; j < arr.length; j++) {
            com[j] = companies.get(arr[j]);
            if (debug)
                System.out.println(com[j]);
        }

        /**
         * @TODO: companies.get(i) or even companies.containsKey(1) gives error values for some wierd reason O_o Resolve this
         *
         * method throws a nullpointerexception as a result.
         */

        return s2.createPrefernces(com);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/gettime")
    public QueuePosition[] getOreferences(@QueryParam(value = "stud") String id) {
        return students.get(id).getQueuePositions();
    }


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getqueue")
    public QueuePosition[] getCompanyQueueOne(@QueryParam(value = "comp") String ID) {
        CompanyQueue cq = companies.get(ID).getCompanyQueue();
        cq.displayCompanyQueue(ID);
        Queue<QueuePosition> qp =  cq.getQueues()[0];
        QueuePosition[] newqp = new QueuePosition[qp.size()];
        int size = qp.size();
        for (int i = 0; i < size; i++) {
            newqp[i] = qp.poll();
            qp.add(newqp[i]);
        }
        cq.displayCompanyQueue(ID);
        return newqp;
    }


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getspeaking")
    public QueuePosition[] getCompanySpeakingQueue(@QueryParam(value = "comp") String ID) {
        CompanyQueue cq = companies.get(ID).getCompanyQueue();
        ArrayList<QueuePosition> qp = cq.getCurrentlySpeaking();
        QueuePosition[] newqp = new QueuePosition[qp.size()];
        int size = qp.size();
        for (int i = 0; i < size; i++) {
            newqp[i] = qp.get(i);
        }
        return newqp;
    }


    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Path("/dequeue")
    public boolean dequeueFromCompany(@FormParam("comp") String ID) {
        Company c = companies.get(ID);
        c.displayCompany();
        c.dequeue();
        c.displayCompany();
        return true;
    }

    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Path("/update")
    public boolean updateFromCompany(@FormParam("comp") String ID, @FormParam("stud") String studID) {
        Company c = companies.get(ID);
        Student s = students.get(studID);
        c.displayCompany();
        s.displayProfile();
        c.update(studID);
        c.displayCompany();
        s.displayProfile();
        return true;
    }

    /*public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        companies = new ArrayList<Company>();

        System.out.println("Enter number of comapnies");
        int num_companies = scan.nextInt();
        System.out.println("Enter company ids");
        for (int i = 0; i < num_companies; i++) {
           companies.add(new Company(scan.nextInt()));
        }
        System.out.println("Enter number of students");
        int num_students = scan.nextInt();
        System.out.println("Enter students");

        students = new ArrayList<Student>();
        for (int i = 0; i < num_students; i++) {
            students.add(new Student(100 + i, "", "", "", null, i, ""));
        }
        QueuePosition.setc(companies);
        QueuePosition.sets(students);
        Student.setc(companies);
        Student.sets(students);

        int i = 0;
        for (Student s: students) {
            Company com[] = new Company[5];
            for (int j = 0; j < 5; j++) {
                com[j] = companies.get((i + j) % (companies.size()));
            }
            i++;
            s.createPrefernces(com);
        }
        for (Company c : companies){
            c.displayCompany();
        }

        while(true){
            System.out.println("Enter Action:\n1) Dequeue\t2) Update\t3)display\t4)OPtimize\t5)Add Student\t\t4)exit");
            int action = scan.nextInt();
            Company comp = null;
            if (action == 1 || action == 2) {
                System.out.println("Company ID = ");
                int comp_id = scan.nextInt();
                for (Company c:companies) {
                    if(c.getCompanyID() == comp_id) {
                        comp = c;
                        break;
                    }
                }
            }

            assert comp != null;
            switch(action){
                case 1:
                    comp.dequeue();
                    comp.displayCompany();
                    break;
                case 2:
                    System.out.println("enter student who has finished");
                    int sid = scan.nextInt();
                    comp.update(sid);
                    comp.displayCompany();
                    Student s = Student.getStudent(sid);
                    s.displayProfile();
                    break;
                case 3:
                    for (Company c : companies){
                        c.displayCompany();
                    }
                    break;
                case 4:
                    System.out.println("enter student you want to optimize");
                    int stid = scan.nextInt();
                    Student s1 = Student.getStudent(stid);
                    s1.optimize();
                    s1.displayProfile();
                    break;
                case 5:
                    Student s2 = new Student(100 + i++, "", "", "", null, i, "");
                    students.add(s2);
                    Student.sets(students);
                    Company com[] = new Company[5];
                    for (int j = 0; j < 5; j++) {
                        com[j] = companies.get(j);
                    }
                    s2.createPrefernces(com);
                    break;
                case 6:
                    System.out.println("bye bye :)");
                    System.exit(1);
            }
        }

    }*/
}
