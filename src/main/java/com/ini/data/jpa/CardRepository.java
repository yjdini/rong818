package com.ini.data.jpa;

import com.ini.data.entity.Card;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.QueryByExampleExecutor;

import java.util.List;

/**
 * Created by Somnus`L on 2017/5/12.
 */
public interface CardRepository extends JpaRepository<Card, Integer>, QueryByExampleExecutor<Card> {

    @Query("select c from Card c order by createTime desc")
    List getCardList(Pageable pageRequest);
}
