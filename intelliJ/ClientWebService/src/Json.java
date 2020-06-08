import java.io.FileWriter;
import java.io.IOException;
import org.json.JSONObject;

public class Json {

    @SuppressWarnings("unchecked")
    public static void main(String[] args) {

        JSONObject jsonObject = new JSONObject();

        FileWriter writeFile = null;

        jsonObject.put("numero_casas", 10);
        jsonObject.put("token", "5b009c671e96c389c52954d09092e6518cdcf77b");
        jsonObject.put("cifrado", "dro yxvi mywzvodovi myxcscdoxd zoyzvo kbo dro nokn. kvnyec rehvoi");
        jsonObject.put("decifrado", "the only completely consistent people are the dead. aldous huxley");
        jsonObject.put("resumo_criptografico", "b178a3576d0ce1ef78f9a295085c9e3df0c0fea6");

        try{
            writeFile = new FileWriter("answer.json");
            writeFile.write(jsonObject.toString());
            writeFile.close();
        }
        catch(IOException e){
            e.printStackTrace();
        }

        System.out.println(jsonObject);

    }

}
