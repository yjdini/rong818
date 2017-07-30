package com.ini.framework;

import com.ini.data.jpa.CardRepository;
import com.ini.data.jpa.CreditRepository;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by Somnus`L on 2017/5/19.
 */
public class BaseService {
    @Autowired
    protected CardRepository cardRepository;
    @Autowired
    protected CreditRepository creditRepository;
}
