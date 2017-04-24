import org.glassfish.jersey.jetty.JettyHttpContainerFactory;
import org.glassfish.jersey.server.ResourceConfig;

import java.net.URI;
import java.util.Hashtable;
import java.util.Scanner;
import java.util.Set;

/**
 * Created by akshatgoyal on 4/19/17.
 */
public class Controller {


    static boolean flag = false;

    public static void main(String[] args) {

      /*  Driver driver = new Driver();
        Scanner scan = new Scanner(System.in);
        driver.companies = new Hashtable<String, Company>();

        System.out.println("Enter number of comapnies");
        int num_companies = scan.nextInt();
        for (int i = 0; i < num_companies; i++) {
            driver.companies.put(""+(1000+i), new Company(""+(1000+i)));
        }
       /* System.out.println("Enter number of students");
        int num_students = scan.nextInt();
        System.out.println("Enter students");

        driver.students = new Hashtable<String, Student>();
       /* for (int i = 0; i < num_students; i++) {
            driver.students.put(""+(100+i), new Student(""+(100 + i), "", "", "", null, i, ""));
        }
        QueuePosition.setc(driver.companies);
       // QueuePosition.sets(driver.students);
        Student.setc(driver.companies);
       // Student.sets(driver.students);

        int l = 0;
        Set<String> keys = driver.students.keySet();
        for (String i: keys) {
            Student s = driver.students.get(i);
            Company com[] = new Company[5];
            for (int j = 0; j < 5; j++) {
                com[j] = driver.companies.get(""+(1000 + ((l+j) % driver.companies.size())));
            }
            l++;
            s.createPrefernces(com);
        }
*/
        Driver.students = new Hashtable<String, Student>();
        Driver.companies = new Hashtable<String, Company>();

        try {
            ResourceConfig config = new ResourceConfig(Driver.class);

            JettyHttpContainerFactory.createServer(new URI("http://localhost:9998/"), config);
        } catch (Exception e) {

        }

    }

}
