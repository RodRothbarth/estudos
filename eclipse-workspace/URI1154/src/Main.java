import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		int idade=sc.nextInt();
		int soma=0;
		int pessoas=0;
		while(idade>0) {
			soma= soma + idade;
			pessoas= pessoas+1;
			idade=sc.nextInt();
		}
		double media=(double) soma/pessoas;
		System.out.printf("%.2f%n", media);
sc.close();
	}

}
