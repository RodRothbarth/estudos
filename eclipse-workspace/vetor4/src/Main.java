import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		int n=sc.nextInt();
		double[] vet = new double[n];
		
		for (int i=0; i<n; i++) {
			vet[i] = sc.nextDouble();
		}
		
		double media=0;
		int cont=0;
		for(int i=0; i<n;i++) {
			media=media + vet[i];
			cont+=1;
		}
		double media1 = (double) media/cont;
		System.out.printf("%.3f%n", media1);
		
		for (int i=0; i<n; i++) {
			if(vet[i]<media1) {
				System.out.println(vet[i]);
			}
		}
		sc.close();

	}

}
