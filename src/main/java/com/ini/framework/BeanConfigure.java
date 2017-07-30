package com.ini.framework;

import com.ini.service.ServiceImpl;
import com.ini.service._abstract.Service;
import com.ini.util.SessionUtil;
import com.ini.util.SmsUtil;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

/**
 * Created by Somnus`L on 2017/5/19.
 *
 */
@Configuration
@Component
public class BeanConfigure {
    @Bean
    public SessionUtil sessionUtil(){
        return new SessionUtil();
    }

    @Bean
    public Service service(){
        return new ServiceImpl();
    }

    @Bean
    public SmsUtil smsUtil() {
        return new SmsUtil();
    }
}
