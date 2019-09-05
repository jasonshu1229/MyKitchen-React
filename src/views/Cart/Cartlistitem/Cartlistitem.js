import React, { Component } from 'react';
import css from './Cartlistitem.module.scss'
// import axios from 'axios'
import GlobalContext from '../../../Components/context/index'
// import ReactDOM from 'react-dom'
import store from '../../Redux/store'
import {singleUnCheck,singleChecked,allUncheck,allChecked} from '../../../Components/actionCreator'

class Cartlistitem extends Component {
    state = { 
        value:1,
        furitContextList:[],
        clickIndexList:[],
     }

    componentWillMount(){
        console.log(this.props.furitContextList)

        this.setState({
            furitContextList:this.props.furitContextList
        })
    }

    render() {
       
        // console.log(this.state.clickIndexList.length)
        console.log('numberIdList:'+ this.props.myproNumberIdList,'点击到的索引值:'+ this.props.myclickIndex)
        

        return (
            <GlobalContext.Consumer>
                {
                    (context) =>{
                        console.log(context)
                        return <div className={css.cart_list_item+' '+css.margin_bottom}>
                {
                    this.state.clickIndexList.length!==0?<ul className={css.shop_li}>
                    {
                        this.props.myproNumberIdList.map((item,index) =><li key={item}>
                            {/* <div className={css.edit_btn+' '+css.i_uncheck}></div> */}
                            {/* <div className={css.check_btn+' '+css.i_checked}></div> */}

                            {store.getState().isSingleCheckShow===true&&(store.getState().isAllCheckShow===true)?
                            <div className={css.check_btn+' '+css.i_checked} onClick={()=>{
                                // console.log(index)

                                //todo: 点击完自己 应该让自己变为未选中状态
                                // TODO: 如何做到点击哪个，隐藏哪个？index 是当前点击的索引值
                                store.dispatch(singleUnCheck(index))
                                store.dispatch(allUncheck())

                            }}></div>
                            :
                            <div className={css.edit_btn+' '+css.i_uncheck} onClick={()=>{
                                console.log(index)

                                store.dispatch(singleChecked(index))
                                store.dispatch(allChecked())
                                
                            }}></div>}

                            <div className={css.shop_img}>
                                <a>
                                    <img src={this.state.furitContextList[this.state.clickIndexList[index]].picUrl} alt="">{}</img>
                                </a>
                            </div>
                            <div className={css.shop_info}>
                                <div className={css.s_title}>{this.state.furitContextList[this.state.clickIndexList[index]].goodsName}</div>
                                <div className={css.price_coupon}>
                                    <div className={css.no_goods}></div>
                                </div>
                                <div className={css.show_two_ele_wrap}>
                                    <div className={css.price}>
                                        <span>{'￥' + this.state.furitContextList[this.state.clickIndexList[index]].price}</span>
                                    </div>
                                    <div className={css.show_left_j}>
                                        <a className={css.minus+ ' '+css.num_action} onClick={()=>{

                                            this.setState({
                                                value:this.state.value -1
                                            },()=>{
                                                if (this.state.value <2) {
                                                    this.setState({
                                                        value:1
                                                    })
                                                }
                                            })

                                        }}>
                                            <img src="/img/minus.png" alt=""></img>
                                        </a>

                                        <input value={this.state.value} type="text" className={css.order_number} name={index}></input>
                                        
                                        <a className={css.plus+' '+css.num_action} onClick={()=>{
                                            
                                            // var selectValue = document.querySelectorAll('.Cartlistitem_order_number__-n4Jq')[index].value
                                            
                                            
                                            this.setState({
                                                value:this.state.value + 1
                                            },()=>{
                                                if(this.state.value>=5){
                                                    this.setState({
                                                        value:5
                                                    })
                                                }
                                            })     

                                        
                                        }}>
                                            <img src="/img/plus.png" alt=""></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>)
                    }
                    </ul>:null
                }
                </div>
            
                    }
                }
            </GlobalContext.Consumer>
        )
    }
        


    componentDidMount(){

        // console.log(this.state.clickIndexList)
        // console.log(this.props.myclickIndex)

        // todo: 第一次点击 + 号时，会走此生命周期
        if(this.state.clickIndexList.length===0){
            this.setState({
                clickIndexList:this.props.myclickIndex===null?[]:[...this.state.clickIndexList,this.props.myclickIndex]
            })
        }

        // todo: 把当前的clickIndexList 状态传给父组件 Cart
        this.props.event(this.state.clickIndexList)
    }

    componentWillReceiveProps(props){
        
        console.log(props.myclickIndex)

       //TODO: 当第一次点击完添加之后，
        // console.log('numberIdList:'+ props.myproNumberIdList,'点击到的索引值:'+ props.myclickIndex)

        // todo: 做此判断是因为从第二次开始，每次点击都会出现添加相同index，
        // todo: 为避免将相同index加入到clickIndexList数组，导致菜品列表更新失败
        // console.log(this.state.clickIndexList.indexOf(props.myclickIndex))

        
        if (this.state.clickIndexList.indexOf(props.myclickIndex)===-1){

            this.setState({
                clickIndexList:props.myclickIndex===null?[]:[...this.state.clickIndexList,props.myclickIndex]
            },()=>{
                console.log('componentWillReceiveProps设置后的clickIndexList',this.state.clickIndexList)

                // todo: 把当前的clickIndexList 状态传给父组件 Cart
                this.props.event(this.state.clickIndexList)
               
            })
        }else{
            return
        }
          
    }

    
}

export default Cartlistitem;