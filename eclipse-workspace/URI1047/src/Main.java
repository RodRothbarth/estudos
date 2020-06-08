import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int horaInicio=sc.nextInt();
		int minutoInicio=sc.nextInt();
		int horaFim=sc.nextInt();
		int minutoFim=sc.nextInt();
		
		int instanteInicial=horaInicio*60+minutoInicio;
		int instanteFinal=horaFim*60+minutoFim;
		int duracao;
		if (instanteInicial<instanteFinal) {
			duracao=instanteFinal-instanteInicial;
		}
		else {
			 duracao=(24*60-instanteInicial)+instanteFinal;
		}
		
		int hora=duracao/60;
		int minuto=duracao%60;
		
			
	System.out.println("O JOGO DUROU "+hora+" HORA(S) E "+minuto+" MINUTO(S)");
		
		sc.close();
	}

}
