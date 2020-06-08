import java.util.Locale;

public class Main {

	public static void main(String[] args) {
		
	System.out.println("porra djoe");
	System.out.print("foi mal! ");
	System.out.println("porra! ");
	
	int y = 32; 
	double x = 10.35987;
	String nome = "Maria";
	int idade = 31;
	double renda = 4000.0;
			
	System.out.printf("%.4f%n", x);
		System.out.println(y);
		Locale.setDefault(Locale.US);
		System.out.printf("%.4f%n", x);
		System.out.println("resultado = " +x+"metros");
		System.out.printf("resultado = %.2f metros%n", x);
		System.out.printf("%s tem %d anos e ganha R$%.2f reais%n", nome, idade, renda);
		
		

	}

}
