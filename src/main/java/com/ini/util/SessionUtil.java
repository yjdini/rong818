package com.ini.util;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Somnus`L on 2017/5/9.
 *
 */
public class SessionUtil {
    private static final ThreadLocal<HttpServletRequest> currentRequest = new ThreadLocal<HttpServletRequest>();

    public void clearSession() {
        currentRequest.get().getSession().setAttribute("user", null);
    }

    public Object get(String key) {
        return currentRequest.get().getSession().getAttribute(key);
    }

    public void set(String key, Object value) {
        currentRequest.get().getSession().setAttribute(key, value);
    }


//    public User getUser() {
//        return (User) currentRequest.get().getSession().getAttribute("user");
//    }

    public boolean logined() {
        return currentRequest.get().getSession().getAttribute("user") != null;
    }

    public static void bindRequest(HttpServletRequest request) {
        currentRequest.set(request);
    }

    public boolean adminLogined() {
        return currentRequest.get().getSession().getAttribute("admin") != null;
    }

}
