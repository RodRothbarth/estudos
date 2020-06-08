package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Client;

public class Program {

	public static void main(String args[]) 	{
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner (System.in);
	   
	   Client client;
	   
	   System.out.print("Enter account number: ");
	   int account=sc.nextInt();
	   System.out.print("Enter account holder: ");
	   sc.nextLine();//pq preciso colocar isso?
	   String holder=sc.nextLine();
	   System.out.print("Is there an inicial deposit? (y/n)");
	   char downpay=sc.next().charAt(0);
	   if (downpay == 'y') {
		   System.out.print("Enter initial deposit value: ");
		   double downPay=sc.nextDouble();
		   client = new Client(account, holder, downPay);
	   }
	   else {
		   client = new Client(account, holder);
	   }
	  
	   System.out.println();
	   System.out.println("Account data:");
	   System.out.println(client);
	   
	   System.out.print("Enter a deposit value: ");
	   double depositValue=sc.nextDouble();
	   client.deposit(depositValue);	   
	   System.out.println("Updated account data: ");
	   System.out.println(client);
	   
	   
	   System.out.print("Enter a withdraw value: ");
	   double withdrawValue=sc.nextDouble();
	   client.withdraw(withdrawValue);
	   System.out.println("Updated account data: ");
	   System.out.println(client);
	   
	  sc.close();
 	}

}
