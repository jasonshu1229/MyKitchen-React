import React, { Component } from 'react';
import css from './Cart_info.module.scss'
// import store from '../../../Redux/store'
import { Toast, WingBlank,  } from 'antd-mobile';

function offline() {
    Toast.offline('加那么多，你吃的完嘛~kerwin!!!', 2.5);
  }

class Cart_info extends Component {
    state = { 
        value:1,
        // isAddCartShow:null
        isShow:this.props.myIsShow
     }
    render() {
        // console.log(this.props)
        var myDetailList = this.props.myDetailList
        return (
            <div>
                {/* <div className={css.cart_info}>
                    <div className={css.close} onClick={this.handleClose}>
                        <img src="/img/close.png" alt="close" onClick={this.hanleClose}></img>
                    </div>
                    <img className={css.good} alt="good" src={myDetailList.picUrl}></img>
                    <p>商品售价</p>
                    <div className={css.price}>{myDetailList.price}</div>
                    <span>购买数量</span>
                    <div className={css.addmin}>
                        <span className={css.min} onClick={this.handleDel}>
                            <img src="/img/min1.png" alt="min1"></img>
                        </span>
                        <input type="number" defaultValue={this.state.value}></input>
                        <span className={css.add} onClick={this.handleAdd}>
                            <img src="/img/addreal.png" alt="add"></img>
                        </span>
                    </div>            
                </div> */}
                {
                    this.state.isShow===false?<div className={css.cart_info}>
                    <div className={css.close} onClick={this.handleClose}>
                        <img src="/img/close.png" alt="close" onClick={this.hanleClose}></img>
                    </div>
                    <img className={css.good} alt="good" src={myDetailList.picUrl}></img>
                    <p>商品售价</p>
                    <div className={css.price}>{myDetailList.price}</div>
                    <span>购买数量</span>
                    <div className={css.addmin}>
                        <span className={css.min} onClick={this.handleDel}>
                            <img src="/img/min1.png" alt="min1"></img>
                        </span>
                        <input type="number" value={this.state.value}></input>
                        
                        <WingBlank>
                        {/* <Button onClick={offline}>network failure</Button> */}
                        <span className={css.add} onClick={this.handleAdd}>
                            <img src="/img/addreal.png" alt="add"></img>
                        </span>
                        </WingBlank>
                    </div>            
                </div>:null
                }
            </div>
        );
    }


    hanleClose = ()=>{
        // store.dispatch(hiddeAddCartButton())

        this.setState({
            // isAddCartShow:store.getState().isAddCartShow
            isShow:true
        })
        this.props.event(this.state.isShow)
    }
    
    handleDel = ()=>{
       
        this.setState({
            value:this.state.value-1
        })
        if(this.state.value<=1){
            this.setState({
                value:1
            })
        }
    }

    handleAdd = ()=>{
        
        this.setState({
            value:this.state.value +1
        })
        if (this.state.value>=5) {
            offline()
            this.setState({
                value:5
            },()=>{
                this.props.event(this.state.value)
                return
            })
        }

        this.props.event(this.state.value + 1)
    }

    componentDidUpdate(){
        console.log(this.state.value);
        // this.props.event(this.state.value)
    }
}

export default Cart_info;