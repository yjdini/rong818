package com.ini.controllers;

import com.ini.data.entity.Card;
import com.ini.data.entity.Credit;
import com.ini.framework.BaseController;
import com.ini.util.Map2Bean;
import com.ini.util.ResultMap;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Created by Somnus`L on 2017/5/19.
 */
@RequestMapping("/")
public class IndexController extends BaseController {
    @RequestMapping("/")
    public String creditlist() {
        return "index.html";
    }

}
