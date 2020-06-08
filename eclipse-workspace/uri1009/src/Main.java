import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc=new Scanner(System.in);
		
		String vendedor=sc.next();
		double fixo=sc.nextDouble();
		double vendas=sc.nextDouble();
		
		double salario=fixo+(15*vendas)/100;
		System.out.printf("TOTAL = R$ %.2f%n", salario);
		
sc.close();
	}

}
