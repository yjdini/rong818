package com.ini.data.jpa;

import com.ini.data.entity.Credit;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.QueryByExampleExecutor;

import java.util.List;

/**
 * Created by Somnus`L on 2017/5/12.
 */
public interface CreditRepository extends JpaRepository<Credit, Integer>, QueryByExampleExecutor<Credit> {

    @Query("select c from Credit c order by createTime desc")
    List getCreditList(Pageable pageRequest);
}
