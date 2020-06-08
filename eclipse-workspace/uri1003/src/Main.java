import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);
		int A, B, c;
		
		A= sc.nextInt();
		B= sc.nextInt();
		c= A+B;
		System.out.println("SOMA = " + c);

		sc.close();
	}

}
