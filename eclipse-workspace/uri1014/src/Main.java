import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc=new Scanner(System.in);
		
		int Kilometros=sc.nextInt();
		double Litros=sc.nextDouble();
		double consumo= Kilometros/Litros;
		
		System.out.printf("%.3f km/l%n", consumo);
sc.close();
	}

}
