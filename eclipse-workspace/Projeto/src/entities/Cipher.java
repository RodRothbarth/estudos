package entities;

public class Cipher {

	private String frase;
	private int chave;
	
	public Cipher(String frase, int chave) {
		this.frase = frase;
		this.chave = chave;
	}

	public String getFrase() {
		return frase;
	}

	public void setFrase(String frase) {
		this.frase = frase;
	}

	public int getChave() {
		return chave;
	}

	public void setChave(int chave) {
		this.chave = chave;
	}
	
	if(chave>26){
		chave = chave%26;
	}
	else if(chave>0) {
		chave = (chave%26)+26;
	}

	String textoCifrado;
	int tamanho = frase.length();
	for(int i = 0;i<tamanho;i++){
		char ch = frase.charAt(i);
		if (Character.isLetter(ch)) {
			if (Character.isLowerCase(ch)) {
				char c = (char) (ch + chave);
				if (c > 'z') {
					textoCifrado += (char) (ch - (26 - chave));
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

}
