import java.util.Locale;

public class Main {

	public static void main(String[] args) {
		
		String produto1 = "Computador";
		String produto2 = "Office desk";
		
		int idade = 30;
		int codigo = 5290;
		char genero = 'F';
		
		double preco1 = 2100.0;
		double preco2 = 650.50;
		double medida = 53.234567;
				
				System.out.println("Produto:");
		System.out.printf(produto1 + ", que o preço é $" +"%.2f%n", preco1);
		System.out.printf(produto2 + ", que o preço é $" + "%.2f%n", preco2);
		System.out.println();
		System.out.println("Record: " + idade + " anos, " + "Código: " + codigo + " e genero: " + genero);  
		System.out.println();
		System.out.println("Medida com 8 casas decimais: " + medida);
		System.out.printf("Erredondamento (3 casas decimais): " + "%.3f%n", medida);
	Locale.setDefault(Locale.US);
	System.out.printf("Medida Americana: " + "%.3f%n", medida);
	}

}
