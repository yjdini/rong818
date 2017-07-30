package com.ini.aop.authentication;

import com.ini.util.PrintUtil;
import com.ini.util.ReflectUtil;
import com.ini.util.ResultMap;
import com.ini.util.SessionUtil;
import com.ini.util.convert.ResultMapConvert;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Created by Somnus`L on 2017/1/12.
 */
public final class AuthenticationInterceptor extends HandlerInterceptorAdapter
{
    private final SessionUtil sessionUtil = new SessionUtil();

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception
    {
        SessionUtil.bindRequest(request);

        if (!(handler instanceof HandlerMethod))
        {
            return false;
        }
        Authentication authenti = ReflectUtil.getAnnotation((HandlerMethod) handler, Authentication.class);

        if (authenti == null)
        {
            return true;
        }

        AuthenticationType value = authenti.value();

        if (value == AuthenticationType.CommonUser)
        {
            if (sessionUtil.logined()) {
                return true;
            } else {
                PrintUtil.responseWithJson(response, new ResultMapConvert()
                        .convert(ResultMap.unlogin().setMessage("用户未登录")));
                return false;
            }
        }
        else if (value == AuthenticationType.Admin)
        {
            if (sessionUtil.adminLogined()) {
                return true;
            } else {
                PrintUtil.responseWithJson(response, new ResultMapConvert()
                        .convert(ResultMap.unlogin().setMessage("用户未登录")));
                return false;
            }
        }
        else if(value == AuthenticationType.Master)
        {
            return false;
        }
        else if (value == AuthenticationType.Root) {
            return true;
        }
        return true;
    }

    @Override
    public void afterCompletion(
            HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
    }

}
