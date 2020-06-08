import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		Locale.setDefault(Locale.US);
		int n=sc.nextInt();
		int cem=n/100;
		int resto1=n%100;
		int cinquenta=resto1/50;
		int resto2=resto1%50;
		int vinte=resto2/20;
		int resto3=resto2%20;
		int dez=resto3/10;
		int resto4=resto3%10;
		int cinco=resto4/5;
		int resto5=resto4%5;
		int dois=resto5/2;
		int um=resto5%2;
		
		System.out.println(n);
		System.out.println(cem+" notas(s) de R$100,00");
		System.out.println(cinquenta+" notas(s) de R$50,00");
		System.out.println(vinte+" notas(s) de R$20,00");
		System.out.println(dez+" notas(s) de R$10,00");
		System.out.println(cinco+" notas(s) de R$5,00");
		System.out.println(dois+" notas(s) de R$2,00");
		System.out.println(um+" notas(s) de R$1,00");
		
	sc.close();
	}

}
