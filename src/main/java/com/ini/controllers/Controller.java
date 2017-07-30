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
@RequestMapping("/api")
@RestController
public class Controller extends BaseController {

    @RequestMapping(value = "/addcredit",method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
    public Map addCredit(@RequestBody Map body) {
        String code = (String) body.get("valicode");
        if (code == null || !code.equals(sessionUtil.get("valicode"))) {
           return ResultMap.error().setMessage("验证码错误！").getMap();
        }
        Credit credit = Map2Bean.convert(body, new Credit(true), true);
        return service.addCredit(credit);
    }

    @RequestMapping(value = "/addcard",method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
    public Map addCard(@RequestBody Map body) {
        String code = (String) body.get("valicode");
        if (code == null || !code.equals(sessionUtil.get("valicode"))) {
            return ResultMap.error().setMessage("验证码错误！").getMap();
        }
        Card card = Map2Bean.convert(body, new Card(true), true);
        return service.addCard(card);
    }

    @RequestMapping(value = "/sendcode/{phone}")
    public Map sendCode(@PathVariable String phone) {
        String code = smsUtil.sendCode(phone);
        sessionUtil.set("valicode", code);
        return ResultMap.ok().getMap();
    }

    @RequestMapping(value = "/cardlist")
    public Map cardlist(@RequestBody Map body) {
        String currentPage = (String) body.get("currentPage");
        return service.getCardList(Integer.valueOf(currentPage));
    }

    @RequestMapping(value = "/creditlist")
    public Map creditlist(@RequestBody Map body) {
        String currentPage = (String) body.get("currentPage");
        return service.getCreditList(Integer.valueOf(currentPage));
    }

    @RequestMapping(value = "/root/login", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
    public Map login(@RequestBody Map<String, Object> body)
    {
        String name = (String) body.get("name");
        String password = (String) body.get("password");
        if ("root".equals(name) && "123456".equals(password)) {
            return ResultMap.ok().getMap();
        } else {
            return ResultMap.error().getMap();
        }
    }
}
