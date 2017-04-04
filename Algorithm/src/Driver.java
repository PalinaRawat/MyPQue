import java.util.ArrayList;
import java.util.Scanner;

/**
 * Created by akshatgoyal on 4/3/17.
 */
public class Driver {
    static ArrayList<Company> companies;
    static ArrayList<Student> students;

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        companies = new ArrayList<>();

        System.out.println("Enter number of comapnies");
        int num_companies = scan.nextInt();
        System.out.println("Enter company ids");
        for (int i = 0; i < num_companies; i++) {
           companies.add(new Company(scan.nextInt()));
        }
        System.out.println("Enter number of students");
        int num_students = scan.nextInt();
        System.out.println("Enter students");
/*
    id

*   // Profile Stuff
    private String firstName;
    private String lastName;
    private String fullName;
    private String major;
    private Standings standing;
    private int gradYear;
    private String resumeLink;
* */
        students = new ArrayList<>();
        for (int i = 0; i < num_students; i++) {
            students.add(new Student(100 + i, "", "", "", null, i, ""));
        }
        QueuePosition.setc(companies);
        QueuePosition.sets(students);

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

    }
}
