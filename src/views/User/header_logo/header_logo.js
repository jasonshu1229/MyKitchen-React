import React, { Component } from 'react';
import css from './header_logo.module.scss'

class Header_logo extends Component {
    state = {  }
    render() {
        return (
            <div className={css.header_logo}>
                <img src="/img/header_bg@3x.png" alt="header_top"></img>
                <div className={css.cust_icon}>
                    
                    {sessionStorage.getItem("HiddeLoginButton")?<img src="/img/cust-icon-defualt.png" alt="nologin"></img>:<img src="/img/cust-icon-nologin.png" alt="nologin"></img>}
                    {sessionStorage.getItem("HiddeLoginButton")?<p>用户123456已登录</p>:<p>未登录</p>}
                </div>
                <div className={css.balance_coupon}>
                    <div>
                        <div className={css.balance}>
                            <div>0</div>
                            <p>账户余额</p>
                        </div>
                        <div className={css.coupon}>
                            <div>0</div>
                            <p>优惠券</p>
                        </div>
                    </div>
                    <div className={css.recharge_tab}>
                        <img src="/img/profile-arrow@3x.png" alt="arrow" className={css.profile}></img>
                        <div className={css.recharge_gift}>
                            <img src="/img/g-recharge@3x.png" alt="recharge"></img>
                            充值立送现金券哦~
                        </div>
                        <div className={css.go_recharge}>
                            马上充值
                            <img src="/img/recharge@3x.png" alt="right"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header_logo;