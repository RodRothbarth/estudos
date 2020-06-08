import java.util.Locale;
import java.util.Scanner;

class Criptografia {

    public static String encrypt(String frase, int chave) {
        if(chave>26){
            chave = chave%26;
        }
        else if(chave>0) {
            chave = (chave%26)+26;
        }

        String  textoCifrado = "";

        int tamanho = frase.length();
        for(int i = 0;i<tamanho;i++){
            char ch = frase.charAt(i);
            if (Character.isLetter(ch)) {
                if (Character.isLowerCase(ch)) {
                    char c = (char)(ch + chave);
                    if (c > 'z') {
                        textoCifrado += (char)(ch - (26-chave));
                    }
                    else {
                        textoCifrado += c;
                    }
                }
                else if (Character.isUpperCase(ch)) {
                    char c = (char) (ch + chave);
                    if (c > 'Z') {
                        textoCifrado += (char) (ch - (26 - chave));
                    }
                    else {
                        textoCifrado += c;
                    }
                }
            }
            else {
                textoCifrado += ch;
            }
        }
        return textoCifrado;
    }

    public static String dencrypt(String frase, int chave) {
        if(chave>26){
            chave = chave%26;
        }
        else if(chave>0) {
            chave = (chave%26)+26;
        }

        String  textoCifrado = "";

        int tamanho = frase.length();
        for(int i = 0;i<tamanho;i++){
            char ch = frase.charAt(i);
            if (Character.isLetter(ch)) {
                if (Character.isLowerCase(ch)) {
                    char c = (char)(ch - chave);
                    if (c < 'a') {
                        textoCifrado += (char) (ch + (26-chave));
                    }
                    else {
                        textoCifrado += c;
                    }
                }
                else if (Character.isUpperCase(ch)) {
                    char c = (char) (ch - chave);
                    if (c < 'A') {
                        textoCifrado += (char) (ch + (26 - chave));
                    }
                    else {
                        textoCifrado += c;
                    }
                }
            }
            else {
                textoCifrado += ch;
            }
        }
        return textoCifrado;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Locale.setDefault(Locale.US);

        System.out.println("Entre Frase para incriptar:");
        String frase=sc.nextLine();
        System.out.println("Entre chave de codificação");
        int chave = sc.nextInt();

        String cipher = encrypt(frase, chave);

        System.out.println(cipher);

        sc.close();
    }

}

