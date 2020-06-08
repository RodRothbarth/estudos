import java.io.File;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.FileRequestEntity;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.RequestEntity;

public class Envio {
    public static void main(String[] args) throws Exception {
        64	        if (args.length != 2) {
            65	            System.out.println("Usage: java -classpath <classpath> [-Dorg.apache.commons.logging.simplelog.defaultlog=<loglevel>] PostXML <url> <filename>]");
            66	            System.out.println("<classpath> - must contain the commons-httpclient.jar and commons-logging.jar");
            67	            System.out.println("<loglevel> - one of error, warn, info, debug, trace");
            68	            System.out.println("<url> - the URL to post the file to");
            69	            System.out.println("<filename> - file to post to the URL");
            70	            System.out.println();
            71	            System.exit(1);
            72	        }
        73	        // Get target URL
        74	        String strURL = args[0];
        75	        // Get file to be posted
        76	        String strXMLFilename = args[1];
        77	        File input = new File(strXMLFilename);
        78	        // Prepare HTTP post
        79	        PostMethod post = new PostMethod(strURL);
        80	        // Request content will be retrieved directly
        81	        // from the input stream
        82	        RequestEntity entity = new FileRequestEntity(input, "text/xml; charset=ISO-8859-1");
        83	        post.setRequestEntity(entity);
        84	        // Get HTTP client
        85	        HttpClient httpclient = new HttpClient();
        86	        // Execute request
        87	        try {
            88	            int result = httpclient.executeMethod(post);
            89	            // Display status code
            90	            System.out.println("Response status code: " + result);
            91	            // Display response
            92	            System.out.println("Response body: ");
            93	            System.out.println(post.getResponseBodyAsString());
            94	        } finally {
            95	            // Release current connection to the connection pool once you are done
            96	            post.releaseConnection();
            97	        }
        98	    }
}
