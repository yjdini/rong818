package com.ini.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;

/**
 * Created by yjdini on 2017/7/29.
 */
public class TCPClient {
    public static void main(String[] args) throws Exception{
        System.out.println("client start...");
        Socket s = new Socket("192.168.1.102",10005);
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));
        String sendDataStr=null;
        while((sendDataStr=br.readLine())!=null){
            if(sendDataStr.equals("bye")){
                break;
            }
            bw.write(sendDataStr);
            bw.newLine();
            bw.flush();
        }
        bw.close();
    }
}
