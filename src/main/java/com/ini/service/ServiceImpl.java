package com.ini.service;

import com.ini.data.entity.Card;
import com.ini.data.entity.Credit;
import com.ini.framework.BaseService;
import com.ini.service._abstract.Service;
import com.ini.util.ResultMap;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

/**
 * Created by Somnus`L on 2017/5/11.
 */
public class ServiceImpl extends BaseService implements Service{
    @Override
    public Map addCard(Card card) {
        cardRepository.save(card);
        return ResultMap.ok().getMap();
    }

    @Override
    public Map addCredit(Credit credit) {
        creditRepository.save(credit);
        return ResultMap.ok().getMap();
    }

    @Override
    public Map getCardList(Integer currentPage) {
        Pageable pageRequest = new PageRequest(currentPage,10);
        List cards = cardRepository.getCardList(pageRequest);
        long recordsNum = cardRepository.count();
        return ResultMap.ok().result("list",cards).result("recordsNum", recordsNum).getMap();
    }

    @Override
    public Map getCreditList(Integer currentPage) {
        Pageable pageRequest = new PageRequest(currentPage,10);
        List credits = creditRepository.getCreditList(pageRequest);
        long recordsNum = creditRepository.count();
        return ResultMap.ok().result("list",credits).result("recordsNum", recordsNum).getMap();
    }
}
