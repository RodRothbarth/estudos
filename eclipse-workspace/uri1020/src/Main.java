import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int N, anos, resto, meses,dias;
		N=sc.nextInt();
		
		anos=N/365;
		resto=N%365;
		meses=resto/30;
		dias=resto%30;
		
		System.out.println(anos + " ano(s)");
		System.out.println(meses + " mês(es)");
		System.out.println(dias + " dia(s)");
		
	
 sc.close();
	}

}
