import java.util.Scanner;

public class teste {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Esconha entre 1.Encriptar ou 2.Decifrar");
        int escolha = sc.nextInt();

        if (escolha == 1) {
            System.out.println("Codificar.");
            sc.nextLine();
            System.out.println("Entre mansagem:");
            String texto = sc.nextLine();
            System.out.println("Entre chave de codificação:");
            int chave = sc.nextInt();

            String textoCifrado = "";

            int tamanho = texto.length();
            char alfabeto;
            for (int i = 0; i < tamanho; i++) {
                alfabeto = texto.charAt(i);
                if (alfabeto >= 'a' && alfabeto <= 'z') {
                    alfabeto = (char) (alfabeto + chave);
                    if (alfabeto < 'z') {

                        alfabeto = (char) (alfabeto + 'a' - 'z' - 1);
                    }
                    textoCifrado = textoCifrado + alfabeto;
                }

                else if (alfabeto >= 'A' && alfabeto <= 'Z') {

                    alfabeto = (char) (alfabeto - chave);

                    if (alfabeto < 'Z') {
                        alfabeto = (char) (alfabeto + 'A' - 'Z' - 1);
                    }
                    textoCifrado = textoCifrado + alfabeto;
                } else {
                    textoCifrado = textoCifrado + alfabeto;
                }
            }
            System.out.println(" Mensagem: " + textoCifrado);

        } else if (escolha == 2) {
            System.out.println("Decodificar.");
            sc.nextLine();
            System.out.print("Entre mansagem:");
            String texto = sc.nextLine();
            System.out.println("Entre chave de codificação:");
            int chave = sc.nextInt();

            String textoDecifrado = "";
            char alfabeto;
            int tamanho = texto.length();
            for (int i = 0; i < tamanho; i++) {
                alfabeto = texto.charAt(i);
                if (alfabeto >= 'a' && alfabeto <= 'z') {
                    alfabeto = (char) (alfabeto - chave);
                    if (alfabeto > 'z') {

                        alfabeto = (char) (alfabeto - 'a' + 'z' + 1);
                    }
                    textoDecifrado = textoDecifrado + alfabeto;
                }

                else if (alfabeto >= 'A' && alfabeto <= 'Z') {

                    alfabeto = (char) (alfabeto - chave);

                    if (alfabeto < 'Z') {
                        alfabeto = (char) (alfabeto - 'A' + 'Z' + 1);
                    }
                    textoDecifrado = textoDecifrado + alfabeto;
                } else {
                    textoDecifrado = textoDecifrado + alfabeto;
                }
            }
            System.out.println(" Mensagem Decodificada : " + textoDecifrado);
        } else {
            System.out.println("Escolha errada amigo! Tente de novo.");
        }

        sc.close();
    }

}