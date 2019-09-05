import React, { Component } from 'react';
import css from './cart.module.scss'
import Cartinfo from './Cart_info/Cart_info'
import axios from 'axios'
import store from '../../Redux/store'
import { ActivityIndicator, WingBlank, } from 'antd-mobile';

class cart extends Component {
    state = { 
        count:0,
        isShow:true,
        propsState:false,
        animating:false
     }
    render() {
        // console.log(this.props.myDetailList);
        //todo: 更新状态之后，不再走render？
        var myDetailList = this.props.myDetailList
        return (
            <div>

                {this.state.isShow===true?<div className={css.cart}>
                    <div className={css.cart_l}>
                        <img src="/img/catr.png" alt="catr"></img>
                        <span>{this.state.count}</span>
                    </div>
                    <div className={css.cart_r} onClick={this.handleAddCart}>加入购物车</div>
                </div>:null}

                {this.state.isShow===false?<div className={css.cart_on} onClick={this.handleAddCartHiddeCart}>确定加入购物车啦</div>:null}

                {this.state.isShow===false?<div className={css.pop}></div>:null}
                
                {this.state.propsState===true?<Cartinfo
                myDetailList={this.props.myDetailList} myIsShow={this.state.isShow} event={(data)=>{
                    console.log('子组件传过来的状态',data)

                    if (typeof(data)!=="number") {
                        this.setState({
                            propsState:data,
                            isShow:true
                        })
                    }else if(typeof(data)==="number"){
                        this.setState({
                            count:data,
                            isShow:false
                        })
                    }
                    
                }}></Cartinfo>:null}

                {
                    this.state.animating===true?<ActivityIndicator
                    toast
                    text="已添加到购物车..."
                    animating={this.state.animating}
                />:null
                }

            </div>
        );
    }

    handleAddCart = ()=>{

        this.setState({
            isShow:false,
            propsState:true,
            animating:false
        })

        
    }

    handleAddCartHiddeCart = ()=>{
        // console.log('cart组件接收到详情页面的id',this.props.detailId)
        console.log('---------');
        this.setState({
            animating:true
        },()=>{console.log(this.state.animating)})

        setTimeout(() => {
            this.setState({
                animating:false,
                propsState:false,
                isShow:true
            })
        }, 1500);
        
        
    }

    showToast = () => {
        this.setState({ animating: !this.state.animating });
        this.closeTimer = setTimeout(() => {
          this.setState({ animating: !this.state.animating });
        }, 1000);
      }


}

export default cart;