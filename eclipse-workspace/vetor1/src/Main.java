import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		int n=sc.nextInt();
		
		double[] vet = new double [n];
		
		for(int i=0;i<n;i++) {
			vet[i]=sc.nextDouble();
					}
		double max=vet[0];
		int vlr=0;
		
		for (int i=1;i<n;i++) {
			if(vet[i] > max) {
			max=vet[i];
			vlr=i;
					}
			}
		System.out.printf("%.1f%n", max);
		System.out.println(vlr);
sc.close();

	}

}
