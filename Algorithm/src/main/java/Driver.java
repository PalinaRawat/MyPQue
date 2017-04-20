import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.*;


/**
 * Created by akshatgoyal on 4/3/17.
 */
@Path("server")
public class Driver {
    //ArrayList<Company> companies;
    static Hashtable<Integer, Company> companies;
    static Hashtable<Integer, Student> students;
    //ArrayList<Student> students;


    //Student Methods

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("create")
    public boolean createPreferences(@QueryParam(value = "stud") int id,  @QueryParam(value = "comp") List<Integer> comps) {
        Student s2 = new Student(id, "", "", "", null, id, "");
        students.put(id, s2);
        Student.sets(students);
        Company com[] = new Company[comps.size()];
        for (int j = 0; j < comps.size(); j++) {
            com[j] = companies.get(comps.get(j));
        }
        return s2.createPrefernces(com);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("gettime")
    public QueuePosition[] getOreferences(@QueryParam(value = "stud") int id) {
        return students.get(id).getQueuePositions();
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
