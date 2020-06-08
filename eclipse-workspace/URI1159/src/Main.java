import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		
		int X=sc.nextInt();
			
		while (X!=0) {
			if(X%2!=0) {
				X=X+1;
			}
		
			int soma= X + X + 2 + X + 4 + X + 6 + X + 8;		
				System.out.println(soma);
				X=sc.nextInt();
	}
sc.close();
	}
}
