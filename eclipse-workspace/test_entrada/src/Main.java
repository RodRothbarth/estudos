import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
	Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
int x;
String y;
double z;
y = sc.next();
x = sc.nextInt();
z = sc.nextDouble();

System.out.println("Você digitou: ");
System.out.println(y);
System.out.println(x);
System.out.println(z);
		sc.close();
	
	}

}
