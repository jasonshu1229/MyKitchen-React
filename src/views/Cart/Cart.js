import React, { Component } from 'react';
import css from './Cart.module.scss'
import LoginButton from './LoginButton/LoginButton'
import store from '../Redux/store'
import GlobalContext from '../../Components/context/index'
import Datanone from './data-none/data-none'
import RecommendList from './recommend-list-container/recommend-list-container'
import Header from './Header/Header'
import Section from './time-nav/time-nav'
import Tradebuy from './Tradebuy/Tradebuy'
import Cartlistitem from './Cartlistitem/Cartlistitem'
import Footer from './check-footer/check-footer'
import FooterEdit from './edit-footer/edit-footer'
import {Route,Redirect,Switch} from 'react-router-dom'
import axios from 'axios'

class Cart extends Component {

    state = {
        isLoginButtonShow:false,
        furitContextList:null,
        isHeadShow:false,
        proNumberIdList:[],
        clickIndex:null,
        dataNoneState:false,
        sumPrice:0,
        sumPriceList:[],
        // edit 为ture done为false
        editOrDone:true,
        receiveCartListClickIndex:[],
        againReceiveClickIndex:null,
        canAgain:false
    }

    componentWillMount(){

        // console.log(sessionStorage.getItem("HiddeLoginButton"))
        if(sessionStorage.getItem("HiddeLoginButton")){
            
            this.setState({
                dataNoneState:true
            })
        }

        this.unsubscribe = store.subscribe(()=>{

            console.log('store里的loginButton状态改变了',store.getState())

            this.setState({
                
            })
        })
        
     }

     componentWillUnmount(){
         this.unsubscribe()
     }

    // componentWillMount(){

    //     if(window.sessionStorage){
    //     console.log(sessionStorage.getItem("HiddeLoginButton"))
    //     }
        
    // }
    componentDidMount(){
        //todo: 请求菜品列表的8条数据
        axios({
            url:"http://api9.wochu.cn/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+1%2C%22type%22%3A%221%22%7D",
        }).then(res=>{
            this.setState({
                furitContextList:res.data.data.items
            })
        })
    }

    render() {
        

        return (
            <GlobalContext.Provider value={
                {
                    sumPrice:this.state.sumPrice,
                    sumPriceList:this.state.sumPriceList,


                    sendmessage:(numberlist,index)=>{
                        console.log('Provider接收到的数据',numberlist,index)
                        // console.log() 

                        // TODO: 判断当前合计价格数组里是否还有价钱相同的元素 的状态

        
                        this.setState({
                            proNumberIdList:numberlist,
                            clickIndex:index,
                            dataNoneState:false,
                            // sumPrice:this.state.furitContextList[index].price
                            sumPriceList:[...this.state.sumPriceList,this.state.furitContextList[index].price],

                        },()=>{
                            // console.log(this.state.sumPriceList)
                            // console.log(this.state.clickIndex)
                            var sum=0;
                            for(var i = 0;i<this.state.sumPriceList.length;i++){
                                
                                sum = sum +this.state.sumPriceList[i]
                                
                            }

                            var sumNum = String(sum).substring(0,5)

                            this.setState({
                                sumPrice:sumNum,
                            })
                        
                        })

                        
                    }

                }
            }>
                {
                    
                    <div id={css.Cart} style={{"height":"100%"}}>             
                        {
                            sessionStorage.getItem("HiddeLoginButton")?null:<LoginButton/>
                        }   

                        {/* //todo: 法四：因为clickIndex是后来才收到的，所以根据clickIndex作三木判断 */}
                        {typeof(this.state.clickIndex)==="number"?<Header event={(data)=>{
                            console.log('接受Header传过来的状态',data)

                            if(data==="完成"){
                                
                                this.setState({editOrDone:false},()=>{
                                    console.log(this.state.editOrDone)
                                })
                            }else if(data==="编辑"){

                                this.setState({editOrDone:true},()=>{
                                    console.log(this.state.editOrDone)
                                })
                            }
                            
                        }}></Header>:null}
                        {typeof(this.state.clickIndex)==="number"?<Section></Section>:null}
                        {typeof(this.state.clickIndex)==="number"?<section className={css.cart_list}>
                            <Tradebuy></Tradebuy>
                            <Cartlistitem myproNumberIdList={this.state.proNumberIdList} myclickIndex={this.state.clickIndex} furitContextList={this.state.furitContextList} event={(data)=>{
                                console.log('Cartlistitem组建传过来的clickIndexList',data)
                                this.setState({
                                    receiveCartListClickIndex:[...data]
                                },()=>{
                                    // console.log(this.state.receiveCartListClickIndex)
                                    //todo: 法1：将此值传到store中，集中管理

                                    //todo: 法2: 将此时的状态再传给edit-footer(FooterEdit)组件中处理
                                })
                            }}></Cartlistitem>
                        </section>:null}
                        

                        {
                            this.state.dataNoneState===true?<Datanone/>:null
                        }

                        <section className={css.no_result}>
                        {/* <Switch> */}
                                <Route path="/cart/recommendlist" component={RecommendList}></Route>
                                <Redirect from='/cart' to="/cart/recommendlist"></Redirect>
                        {/* </Switch> */}
                        </section>

                        {this.state.editOrDone===true&&typeof(this.state.clickIndex)==="number"?<Footer></Footer>:null}

                        
                        {this.state.editOrDone===true?null:<FooterEdit myreceiveCartListClickIndex={this.state.receiveCartListClickIndex} event={(data)=>{
                            console.log('edit-footer组件传来的消息,此时CartList应为空数组',data)
                            this.setState({
                                clickIndex:data,
                                editOrDone:true,
                                dataNoneState:true,
                                //todo 清 之前添加的index值
                            },()=>{

                                // todo： 删除列表之后，如果再次接收到从recommend-list传来的点击菜品的索引值,
                                // todo:  应该继续重新渲染列表,重新赋值 clickIndex                        

                            })
                        }}></FooterEdit>}
                        
                        
                    </div>
                    
                }     
                
                  

            </GlobalContext.Provider>   
        );
    }

    componentDidUpdate(){

        
    }    

    
}

export default Cart;