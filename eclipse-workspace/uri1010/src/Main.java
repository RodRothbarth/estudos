import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault (Locale.US);
		Scanner sc = new Scanner (System.in);
		
		int cp=sc.nextInt();
		int qp=sc.nextInt();
		double vu=sc.nextDouble();
		
		int cp1=sc.nextInt();
		int qp1=sc.nextInt();
		double vu1=sc.nextDouble();
		
		double valor1= qp*vu;
		double valor2= qp1*vu1;
		double VF=valor1 + valor2;
		System.out.printf("VALOR A PAGAR: R$ %.2f%n", VF);
		
		
sc.close();
	}

}
