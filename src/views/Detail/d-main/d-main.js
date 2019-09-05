import React, { Component } from 'react';
import css from './d-main.module.scss'

class D_main extends Component {
    state = {  }
    render() {
        // console.log(this.props.myDetailList)
        var myDetailList = this.props.myDetailList
        return (
            <div className={css.d_main+ ' '+css.clearfix}>
                <div className={css.sign}></div>
                <h1 className={css.ellipsis}>
                    <span></span>{myDetailList.goodsName}
                </h1>
                <h2>{myDetailList.description}</h2>
                <div className={css.price+' '+css.clearfix}>
                    <div className={css.o_price}>{"￥" + myDetailList.price}</div>
                    <div className={css.m_price}>{"￥" + myDetailList.marketPrice}</div>
                </div>
                <div className={css.d_icon}>
                    <div className={css.icon1}>免切</div>
                </div>
            </div>
        );
    }

    componentWillMount(){
        
    }
}

export default D_main;