import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n=sc.nextInt();
		int[] vet = new int[n];
		
		for (int i=0; i<n; i++) {
			vet[i]=sc.nextInt();
		}
		int cont=0;
		int media=0;
		for (int i=0; i<n; i++) {
		     if (vet[i]%2 ==0) {
		    	 media = media + vet[i];
		    	 cont++;
		     }
		}
		double media1= (double) media/cont;
		
		if (cont==0) {
			System.out.println("N�o haviam numeros pares");
		}
		else {
			System.out.println(media1);
		}
		
		sc.close();

	}

}
