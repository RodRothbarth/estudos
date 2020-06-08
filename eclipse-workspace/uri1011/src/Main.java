import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc=new Scanner(System.in);
		
		double pi=3.14159;
		int R=sc.nextInt();
		double vol=(4.0/3)*pi*Math.pow(R, 3);
		
		System.out.printf("VOLUME = %.3f%n",vol);
		
		sc.close();
	}

}
