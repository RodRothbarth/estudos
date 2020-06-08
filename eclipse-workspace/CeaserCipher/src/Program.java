import java.util.Scanner;

public class Program {

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        
        System.out.println("Entre Frase para incriptar:");
        String frase = sc.nextLine();
        System.out.println("Entre chave de codificação");
        int chave = sc.nextInt();

        for (int i=0; i < frase.length(); i++){

            System.out.print((char)(frase.charAt(i)-chave));
        }

    }
}
