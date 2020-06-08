import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		int n=sc.nextInt();
		int horas=n/3600;
		int resto=n%3600;
		int minutos=resto/60;
		int segundos=resto%60;
		
		System.out.println(horas+":"+minutos+":"+segundos);
		
sc.close();
	}

}
