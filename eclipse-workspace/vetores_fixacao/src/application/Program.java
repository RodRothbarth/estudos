package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Rooms;

public class Program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		Rooms[] vect = new Rooms[10];
		
		System.out.print("How many rooms will be rented? ");
		int n = sc.nextInt();
		
		for (int i = 1; i<=n; i++) {
			System.out.println("Rent#"+ i + ":");
			System.out.print("Name: ");
			sc.nextLine();
			String name= sc.nextLine();
			System.out.print("E-mail: ");
			String email=sc.nextLine();
			System.out.print("Room: ");
			int room = sc.nextInt();
			vect[room] = new Rooms(name, email);
		}
		System.out.println();
		System.out.println("Busy rooms: ");
		System.out.println();
		
		for (int i=1; i<vect.length; i++) {
			if(vect[i] != null) {
				System.out.println(i + ":" + vect[i]);
			}
		}
				
sc.close();
	}

}
