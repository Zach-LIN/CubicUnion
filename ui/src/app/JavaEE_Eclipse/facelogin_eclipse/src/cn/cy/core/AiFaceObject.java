package cn.cy.core;

import com.baidu.aip.face.AipFace;

public class AiFaceObject {
	    public String APP_ID = "你的";
	    public String API_KEY = "你的";
	    public String SECRET_KEY = "你的";
	    public String GROUD_LIST = "你的";
	    
	    private AipFace client = new AipFace(APP_ID, API_KEY, SECRET_KEY);

	    public AipFace getClient(){
	    	client.setConnectionTimeoutInMillis(2000);
	    	client.setSocketTimeoutInMillis(60000);
	    	return client;
	    }
	    
}
