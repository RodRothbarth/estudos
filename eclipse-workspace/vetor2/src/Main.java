import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int [] vet = new int [n];
		
		for (int i = 0; i<n; i++) {
			vet[i]=sc.nextInt();
		}
		int cont=0;
		for (int i=0;i<n; i++) {
			if (vet[i]%2 == 0) {
				System.out.print(vet[i]+" ");
				cont=cont+1;
			}
		}
		System.out.println();
		System.out.println(cont);
		sc.close();

	}
	}

