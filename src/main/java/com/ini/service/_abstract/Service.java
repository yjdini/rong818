package com.ini.service._abstract;

import com.ini.data.entity.Card;
import com.ini.data.entity.Credit;

import java.util.Map;

/**
 * Created by Somnus`L on 2017/5/11.
 */
public interface Service {

    Map addCard(Card card);

    Map addCredit(Credit credit);

    Map getCardList(Integer currentPage);

    Map getCreditList(Integer currentPage);
}
