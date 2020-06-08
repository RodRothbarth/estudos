package application;

import java.util.Locale;
import java.util.Scanner;

import util.Calculator;

public class Program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner (System.in);
				
		System.out.print("Enter radious: ");
		double raio=sc.nextDouble();
				
		System.out.printf("Circunferencia: %.2f%n", Calculator.circunferencia(raio));
		System.out.printf("Volume: %.2f%n", Calculator.volume(raio));
		System.out.printf("Vlaor do PI: %.2f%n", Calculator.PI);
		
sc.close();
	}

}
