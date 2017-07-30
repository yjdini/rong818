package com.ini.util;

/**
 * Created by Somnus`L on 2017/5/19.
 */
public class SmsUtil {
    private final String url = "http://api.cnsms.cn/?ac=send&uid=113320&encode=utf8&pwd=16b6ae6f30507689559b258c488e60ca" +
            "&mobile=$mobile&content=%E6%82%A8%E7%9A%84%E9%AA%8C%E8%AF%81%E7%A0%81%E4%B8%BA%EF%BC%9A$code";

    public String sendCode(String phone) {
        String code = generateRandomCode();
        String sendUrl = url.replace("$mobile", phone).replace("$code", code);
        HttpUtil.sendGet(sendUrl);
        return code;
    }

    private String generateRandomCode() {
        Long current = System.currentTimeMillis();
        return current.toString().substring(9);
    }
}
