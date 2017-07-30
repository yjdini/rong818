package com.ini.data.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Somnus`L on 2017/5/4.
 *
 */
@Entity
@Table(name = "card")
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cardId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createTime;

    private Integer status;

    private String cardlong;

    private String cardnum;

    private String card;

    private String phone;

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Card() {
    }

    public Card(boolean initial) {
        this.createTime = new Date();
        this.status = 1;
    }

    public Integer getCardId() {
        return cardId;
    }

    public void setCardId(Integer cardId) {
        this.cardId = cardId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getCardlong() {
        return cardlong;
    }

    public void setCardlong(String cardlong) {
        this.cardlong = cardlong;
    }

    public String getCardnum() {
        return cardnum;
    }

    public void setCardnum(String cardnum) {
        this.cardnum = cardnum;
    }

    public String getCard() {
        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }
}
