import java.util.Locale;

public class projeto_deveres {

	public static void main(String[] args) {
		String product1 = "Computer";
		String product2 = "Office desk";
		int age = 30;
		int code = 5290;
		char gender = 'F';
		double price1 = 2100.0;
		double price2 = 650.50;
		double measure = 53.234567;
		System.out.println("Products:");
		System.out.printf("%s, which price is $ %.2f %n", product1, price1);
		System.out.printf("%s, which price is $ %.2f %n", product2, price2);
		System.out.println();
		System.out.print("Record: ");
		System.out.println();
		System.out.printf("%d years old, code %d and gender: %c %n", age, code, gender);
		System.out.printf("Measure with the eight decimal places: %f %n", measure);
		System.out.printf("Rounded (three decimal places):%.2f%n", measure);
		Locale.setDefault(Locale.US);
		System.out.printf("US decimal point: %.2f", measure);
		

	}

}
