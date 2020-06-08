import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner (System.in);
		
		
		int F=sc.nextInt();
		int H=sc.nextInt();
		double S=sc.nextDouble();
		double s= H * S;
		
		System.out.println("NUMBER = " + F);
		System.out.printf("SALARY = U$ %.2f%n", s);
						
sc.close();
	}

}
