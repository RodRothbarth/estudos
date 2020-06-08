import java.util.Locale;
		import java.util.Scanner;
public class Main {

			public static void main(String[] args) {
				
				Locale.setDefault(Locale.US);
				Scanner sc = new Scanner(System.in);

		double x=sc.nextDouble();
		double y=sc.nextDouble();
		double c=sc.nextDouble();
		double med=(x*2+y*3+c*5)/10.0;

		System.out.printf("MEDIA = %.1f%n", med);
		sc.close();
	}

}
