import React, { Component } from 'react';
import css from './time-nav.module.scss'
import axios from 'axios'

class Time_nav extends Component {
    state = { 
        dispatchDataObj:{}
     }
    render() {
        return (
            <section className={css.time_nav}>
                <div className={css.time_nav_title}>
                    <img src="/img/time-icon.png" alt="time-icon.png" className={css.time_nav_icon}></img>
                    <span>配送时间：</span>
                    <div className={css.time_nav_data}>{ '8/**' + this.state.dispatchDataObj.shippingDateMsg + this.state.dispatchDataObj.shippingTime }</div>
                </div>
                <div className={css.time_nav_info}>去修改</div>
            </section>
        );
    }

    componentDidMount(){
        
        //todo: 请求的是配送日期那一栏的数据
        axios({
            url:'http://api9.wochu.cn/client/v1/sameday/getLoadHomeSameDayInfo'
        }).then(res => {
            // console.log(res.data)
            this.setState({
                dispatchDataObj:res.data.data
            })
            // TODO: 注意:
            // 因为返回的数据为，地址栏下面的片段，配送日期，填写地址等等，
            // 返回的数据类型为对象类型,所以 只能在data里 定义了一个空对象
            // 而{}，它的原型链上还有一个object,所以{}.poster为undefind，null.poster 就报错了
            // {address: "请填写地址", addressId: 0, longitude: null, latitude: null,shippingDate: 1565452800}
        })
    }
}

export default Time_nav;