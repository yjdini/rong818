package com.ini.data.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Somnus`L on 2017/5/4.
 */
@Entity
@Table(name = "credit")
public class Credit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer creditId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createTime;

    private Integer status;

    private String age;
    private String career;
    private String city;
    private String during;
    private String num;
    private String phone;

    private String yuqi;
    private String baoxian;
    private String gongjijin;
    private String chedai;
    private String fangchan;

    public String getYuqi() {
        return yuqi;
    }

    public void setYuqi(String yuqi) {
        this.yuqi = yuqi;
    }

    public String getBaoxian() {
        return baoxian;
    }

    public void setBaoxian(String baoxian) {
        this.baoxian = baoxian;
    }

    public String getGongjijin() {
        return gongjijin;
    }

    public void setGongjijin(String gongjijin) {
        this.gongjijin = gongjijin;
    }

    public String getChedai() {
        return chedai;
    }

    public void setChedai(String chedai) {
        this.chedai = chedai;
    }

    public String getFangchan() {
        return fangchan;
    }

    public void setFangchan(String fangchan) {
        this.fangchan = fangchan;
    }

    public Credit() {
    }

    public Credit(boolean initial) {
        this.createTime = new Date();
        this.status = 1;
    }

    public Integer getCreditId() {
        return creditId;
    }

    public void setCreditId(Integer creditId) {
        this.creditId = creditId;
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

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getCareer() {
        return career;
    }

    public void setCareer(String career) {
        this.career = career;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDuring() {
        return during;
    }

    public void setDuring(String during) {
        this.during = during;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
