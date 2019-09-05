import React, { Component } from 'react';
import css from './recommend-list-container.module.scss'
import axios from 'axios'
import store from '../../Redux/store'
import GlobalContext from '../../../Components/context/index'
import {showCartListItem} from '../../../Components/actionCreator'

class Recommend_list_container extends Component { 
    state = { 
        fruitlist:[],
        numberIdList:[],
        valueList:[]
     }
    render() {
        
        // console.log('render生命周期',this.state.fruitlist)
        return (
            <GlobalContext.Consumer>
                {/* todo: context参数里 带着服务 */}
                {
                    (context) => {
                        return <div className={css.recommend_list_container}>
                        <div className={css.recommend_list_title}></div>
                        <div className={css.recommend_list}>
                            {
                                // todo: fruitlist一开始为空，但render渲染并不会报错，
                                // todo: 而是当异步请求回来之后，render又重新渲染了
                                this.state.fruitlist.map((item,index)=>
                                    <div className={css.recommend_item} key={item.goodsGuid}>
                                        <img src={item.picUrl} alt="img" className={css.recommend_item_img} onClick=
                                        {()=>{
                                            this.handleSkip(item)
                                        }}></img>
                                        <div className={css.recommend_item_info}>
                                            <p className={css.recommend_item_title}>{item.goodsName}</p>
                                            <div className={css.recommend_item_price_container}>
                                                <div className={css.recommend_item_price}>
                                                    <div className={css.recommend_item_old_price}>{"￥" + item.marketPrice}</div>
                                                    <div className={css.recommend_item_current_price}>{"￥" + item.price}</div>
                                                </div>
                                                {/* <div className={css.new_add_cart} onClick={()=>this.addCart(index)}></div> */}
                                                <div className={css.new_add_cart} onClick={()=>{
                                                    //  console.log('取到点击对应菜品的索引值+++++',index)

                                                     console.log('点击到的是菜品列表的那个元素',this.state.fruitlist[index])
                                                     console.log('点击到的是菜品列表的那个元素的对应id值',this.state.fruitlist[index].goodsGuid)

                                                    //  this.props.event(index)

                                                     
                                             
                                                     // todo: 判断两次点击的时候是否加入了相同的菜品，相同菜品的id不能加入数组，
                                                     // todo: 因为此数组是为了遍历有多少个li的
                                                     
                                                     if (this.state.numberIdList.indexOf(this.state.fruitlist[index].goodsGuid)===-1) {
                                                         this.setState({
                                                             numberIdList:[...this.state.numberIdList,this.state.fruitlist[index].goodsGuid]
                                                         },()=>{
                                                             console.log('加入numberIdList数组后的id值',this.state.numberIdList)

                                                             console.log('取到点击对应菜品的索引值+++++',index)
                                                             
                                                             context.sendmessage(this.state.numberIdList,index,)
                                                             
                                                            //  this.props.event(index)

                                                            

                                                         })

                                                         //todo: 将store中的状态改变
                                                         store.dispatch(showCartListItem())
                                                         
                                                     }else{
                                                         return
                                                     }
                                                }}></div>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                        <div className={css.load_more} onClick={
                            ()=>{
                                context.sendmessage(this.state.numberIdList)
                            }
                        }>没有更多啦~小可爱，你们好馋哦~</div>
                    </div>
                    }

                }
            </GlobalContext.Consumer>
        );
    }

    componentDidMount(){

        
        //todo: 请求菜品列表的8条数据
        axios({
            url:"http://api9.wochu.cn/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+1%2C%22type%22%3A%221%22%7D",
        }).then(res=>{
            // console.log(res.data)
            this.setState({
                fruitlist:res.data.data.items
            })
        })
    }

    handleSkip = (item)=>{
        console.log(item.goodsGuid)
        
        console.log(this.props.history)
        this.props.history.push(`/detail/${item.goodsGuid}`)
    }

    // addCart = (index)=>{
    //     console.log('取到点击对应菜品的索引值+++++',index)

    //     console.log('点击到的是菜品列表的那个元素',this.state.fruitlist[index])
    //     console.log('点击到的是菜品列表的那个元素的对应id值',this.state.fruitlist[index].goodsGuid)

    //     // todo: 判断两次点击的时候是否加入了相同的菜品，相同菜品的id不能加入数组，
    //     // todo: 因为此数组是为了遍历有多少个li的
        
    //     if (this.state.numberIdList.indexOf(this.state.fruitlist[index].goodsGuid)===-1) {
    //         this.setState({
    //             numberIdList:[...this.state.numberIdList,this.state.fruitlist[index].goodsGuid]
    //         },()=>{
    //             console.log('加入numberIdList数组后的id值',this.state.numberIdList)

                
    //         })
    //     }else{
    //         return
    //     }
    // }
    
}

export default Recommend_list_container;