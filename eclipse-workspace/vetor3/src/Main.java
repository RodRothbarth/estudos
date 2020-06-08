import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int[] A = new int [n];
		int[] B = new int [n];
		
		for (int i=0; i<n; i++) {
			A[i] = sc.nextInt();
		}
		for (int i=0; i<n; i++) {
			B[i] = sc.nextInt();
		} 
		int soma=0;
		
		int[] C = new int [n];
		for (int i=0; i<n; i++) {
			C[i] = A[i] + B[i];
			System.out.print(C[i]+ " ");
		}
	
					
		sc.close();

	}

}
