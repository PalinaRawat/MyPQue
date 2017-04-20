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


    /**  Akshat your code is commented out down here ( You have got to work on your spelling mistakes btw -.- )**/
 /*
    @GET
    @Path("/create")
    @Consumes(MediaType.APPLICATION_JSON)
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
*/
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
    public boolean create(@FormParam("key1") String string_id, @FormParam("key2") String comps){
        boolean debug = true;
        int id = Integer.parseInt(string_id);

        comps = comps.substring(1,comps.length()-1);
        if (debug)
            System.out.println(comps);
        String[] arr = comps.split(",");
        List<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < arr.length; i++) {
            list.add(i, Integer.parseInt(arr[i]));
        }
        Student s2 = new Student(id, "", "", "", null, id, "");
        students.put(id, s2);
        Student.sets(students);
        Company com[] = new Company[list.size()];
        for (int j = 0; j < list.size(); j++) {
            com[j] = companies.get(list.get(j));
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

    /**
     * Dummy POST handling Method
     * */
    /*@POST @Consumes("application/x-www-form-urlencoded")
    @Path("/create")
    public boolean create(final MultivaluedMap<String, String> formParams) {
        for (String key : formParams.keySet()) {
            System.out.println(key + ": " + formParams.get(key));
        }

        return false;
    }*/


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/gettime")
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
