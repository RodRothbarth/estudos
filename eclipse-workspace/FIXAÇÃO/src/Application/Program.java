package Application;

import java.util.Locale;
import java.util.Scanner;

public class Program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner (System.in);
		
		Rectangule x;
		x = new Rectangule();
		System.out.println("Enter rectangule width and height:");
		x.Width= sc.nextDouble();
		x.Height=sc.nextDouble();
		
		double area=x.area();
		double perimeter=x.perimeter();
		double diagonal=x.diagonal();
		
		System.out.println("AREA = " + area);
		System.out.println("PERIMETER = " + perimeter);
		System.out.println("DIAGONAL = " + diagonal);
		
		
sc.close();
	}

}
