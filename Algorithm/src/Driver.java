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

        students = new ArrayList<>();
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
            System.out.println("Enter Action:\n1) Dequeue\t2) Update\t3)display all companies\t4)exit");
            int action = scan.nextInt();
            Company comp = null;
            if (action != 3 && action != 4) {
                System.out.println("Company ID = ");
                int comp_id = scan.nextInt();

                for (Company c:companies) {
                    if(c.getCompanyID() == comp_id)
                        comp = c;
                    break;
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
                    System.out.println("bye bye :)");
                    System.exit(1);
            }
        }

    }
}
