package util;

public class CorrencyConverter {

	public static double IOF = 0.06;
	
	public static double dollarToReal(double preco, double quantidade) {
		return preco * quantidade * (1.0+IOF);
	}
	  
			 
}
