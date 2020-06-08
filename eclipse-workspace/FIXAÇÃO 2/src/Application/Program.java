package Application;

import java.util.Locale;
import java.util.Scanner;

public class Program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner (System.in);
		
		Employee x=new Employee();
		
		System.out.print("Name: ");
		x.Name=sc.nextLine();
		System.out.print("Gross salary: ");
		x.GrossSalary=sc.nextDouble();
		System.out.print("Tax: ");
		x.Tax=sc.nextDouble();
		
		System.out.println();
		System.out.printf("Employee: " + x.Name + ", $ %.2f%n", x.NetSalary());
		
		System.out.println();
		System.out.print("Which percentage to increase salary? ");
		double percentage=sc.nextDouble();
		emp.IncreaseSalary(percentage);	
		
		System.out.println();
		System.out.printf("Updated data: " + x.Name+ ", $ %.2f%n", x.NetSalary());
		
sc.close();
	}

}
