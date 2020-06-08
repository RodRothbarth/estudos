package Application;

import java.util.Locale;
import java.util.Scanner;

import util.CorrencyConverter;

public class Program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner (System.in);
		
		System.out.print("Qual o preço do Dolar? ");
		double preco=sc.nextDouble();
		System.out.print("Quantos Dolares você quer comprar? ");
		double quantidade=sc.nextDouble();
		System.out.printf("Valor a pagar em reais = %.2f%n", CorrencyConverter.dollarToReal(preco, quantidade));
		
sc.close();
	}

}
