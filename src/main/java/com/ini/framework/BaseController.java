package com.ini.framework;

import com.ini.service._abstract.Service;
import com.ini.util.SessionUtil;
import com.ini.util.SmsUtil;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by Somnus`L on 2017/5/19.
 */
public class BaseController {
    @Autowired
    protected Service service;
    @Autowired
    protected SessionUtil sessionUtil;
    @Autowired
    protected SmsUtil smsUtil;
}
