import React, { Component } from 'react';
import css from './Detail.module.scss'
import axios from 'axios'
import store from '../Redux/store'
import { hiddeTabbar,showTabbar} from '../../Components/actionCreator'
// 引入dedtail分组件
import DetailSwiper from './DetailSwiper/DetailSwiper'
import Dmain from './d-main/d-main'
import Dinfo from './d-info/d-info'
import Drate from './d-rate/d-rate'
import AdviceSwiper from './AdviceSwiper/AdviceSwiper'
import DetailMain from './DetailMain/DetailMain'
import Cart from './cart/cart'
import {Route,Redirect} from 'react-router-dom'

class Detail extends Component {
    state = { 
        detailMainList:{},
        loopList:[],
        adviceList:[]
     }
    render() {
        return (
            <div id={css.box}>
                <div className={css.d_top}>
                    <div className={css.swiper}>
                        <DetailSwiper key={this.state.loopList.length}>
                            {
                                this.state.loopList.map((item,index)=>
                                    <div className="swiper-slide" key={index}>
                                        <img src={item.picUrl} alt="img"></img>
                                    </div>
                                )
                            }
                        </DetailSwiper>
                        <div className={css.d_refer}>
                            <img src="/img/back.png" alt="back" onClick={this.handleBack}></img>
                        </div>
                    </div>
                </div> 
                <Dmain myDetailList={this.state.detailMainList}></Dmain>
                <div className={css.d_navigation}>
                    <img src="/img/navigation.png" alt="navigation.png"></img>
                </div>
                <Dinfo myDetailList={this.state.detailMainList}></Dinfo>
                <Drate></Drate>
                <div className={css.d_advice_text}>
                    <i></i>
                    <p>猜你喜欢</p>
                </div>
                {/* {
                    this.state.detailMainList.length !== 0?<AdviceSwiper myDetailList={this.state.detailMainList}></AdviceSwiper>:null
                } */}
                <AdviceSwiper myAdviceList={this.state.adviceList} preview={3} myclass="adviceswiper"></AdviceSwiper>
                {/* <Route path="/detail/adviceswiper" render={()=>{
                    return <AdviceSwiper myAdviceList={this.state.adviceList} preview={3} myclass="adviceswiper"></AdviceSwiper>
                }}></Route>
                <Redirect from='/detail' to="/detail/adviceswiper"></Redirect> */}

                <DetailMain myDetailList={this.state.detailMainList}></DetailMain>
                <Cart myDetailList={this.state.detailMainList} detailId={this.props.match.params.myid}></Cart>
            </div>
        );
    }

    handleBack = ()=>{
        console.log(this.props.history)
        this.props.history.goBack()
    }

    componentDidMount(){

        // todo: 刚进入详情页时，隐藏tabbar
        store.dispatch(hiddeTabbar())

        // todo: vue接受id值
        // this.$route.params.id
        // todo: 详情页面接受菜品列表跳过来的id值
        console.log(this.props.match.params.myid)

        // todo: 接受每个详情页面的信息概览
        axios({
            url:`http://api9.wochu.cn/api/goods/goods/detail?goodsGuid=${this.props.match.params.myid}`
        }).then(res=>{
            // console.log(res.data)
            this.setState({
                // todo: res.data.data是一个对象
                detailMainList:res.data.data
            })
        })

        // todo: 接受详情页面的轮播数据信息
        axios({
            url:`http://api9.wochu.cn/client/v1/goods/imgLoopList?parameters=%7B%22goodsGuid%22:%22${this.props.match.params.myid}%22%7D`
        }).then(res=>{
            // console.log(res.data)
            this.setState({
                // todo: res.data.data是一个数组
                loopList:res.data.data
            })
        })

        axios({
            url:`http://api9.wochu.cn/client/v1/goods/getGoodsRelevantList?parameters=%7B%22goodsGuid%22:%22${this.props.match.params.myid}%22%7D`
        }).then(res=>{
            // console.log(res.data)
            this.setState({
                adviceList:res.data.data.userloving
            })
        })
        
    }

    componentWillUnmount(){
        store.dispatch(showTabbar())
    }
}

export default Detail;