package Cipher;

import java.util.Scanner;

public class Cifra {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		String mensagem;
		int chave;
		
		System.out.println("Entre com a mensagem:");
		mensagem = sc.next();
		System.out.println("Entre chave:");
		chave = sc.nextInt();
		
sc.close();
	}

}
