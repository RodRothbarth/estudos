public class Ciphers {

    private String tolken;
    private String cifrado;
    private String decodificado;

    public Ciphers() {
    }

    public Ciphers(String tolken, String cifrado, String decodificado) {
        this.tolken = tolken;
        this.cifrado = cifrado;
        this.decodificado = decodificado;
    }

    public String getCifrado() {
        return cifrado;
    }

    public void setCifrado(String cifrado) {
        this.cifrado = cifrado;
    }

    public String getDecodificado() {
        return decodificado;
    }

    public void setDecodificado(String decodificado) {
        this.decodificado = decodificado;
    }

    public String getTolken() {
        return tolken;
    }

    public void setTolken(String tolken) {
        this.tolken = tolken;
    }
}
