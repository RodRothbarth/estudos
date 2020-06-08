package applicatio;

import java.util.Locale;
import java.util.Scanner;

import entities.Product;

public class Program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		Product[] vect = new Product[n];
		
		for(int i = 0; i<vect.length; i++) { // igual ao tamanho do vetor
			sc.nextLine();
			String name= sc.nextLine();
			double price = sc.nextDouble();
			vect[i]=new Product(name, price);
		}
		
		int sum=0;
		for (int i =0; i<vect.length; i++) {
			sum+=vect[i].getPrice();
		}
		double ave = sum/vect.length;
		
		System.out.printf("AAVERAGE PRICE: %.2f%n", ave);
		
		
sc.close();
	}

}
