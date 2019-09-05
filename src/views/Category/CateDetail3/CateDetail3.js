import React,{Component} from 'react'
import axios from 'axios'
import css from './CateDetail3.module.scss'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {show,hide} from '../../Home/HomeActionCreator/actionCreator'
class CateDetail3 extends Component{
    state={
        datalist:[],
        title:this.props.match.params.cateid
    }

    componentWillMount(){
        this.props.hide()
    }

    componentWillUnmount(){
        this.props.show()
    }

    componentDidMount(){
        // console.log(this.props.match.params.cateid)
        axios({
            url:`http://api9.wochu.cn/client/v1/goods/SearchByTagName?parameters=%7B%22tagname%22:%22${this.props.match.params.cateid}%22,%22pageSize%22:10,%22pageIndex%22:1,%22orderId%22:0%7D`
        }).then(res=>{
            // console.log(res.data)
            this.setState({
                datalist:res.data.data.items
            })
        })
    }

    render(){
        // console.log(this.props.history)
        // console.log(this.state.title)
        var titleCon = this.state.title
        var detailList = this.state.datalist
        return <div className={css.cateDetail3}>
                <div className={css.header}>
                    <div className={css.prevbtn} onClick={()=>this.props.history.go(-1)}>
                        <img src="http://wmall.wochu.cn/h5/hotlist/img/back.png?v=d0c1db9a95" alt="" />
                    </div>
                    <div className={css.title}>{titleCon}</div>
                    <div className={css.cart}>
                        <img src="http://wmall.wochu.cn/h5/hotlist/img/icon-cart-60@3x.png?v=80ccbcf8e7" alt="" />
                        <p className={css.dot}>▪▪▪</p>
                    </div>
                </div>
                <div className={css.goodsList}>
                    {
                        detailList.length?
                        detailList.map((item,index)=>
                            <div className={css.goodsCon} key={index} onClick={()=>this.props.history.push(`/detail/${item.goodsGuid}`)}>
                                <div className={css.leftImg}>
                                    <img src={item.picUrl} alt="" />    
                                </div>
                                <div className={css.rightCon}>
                                    <p className={css.goodsName}>{item.goodsName}</p>
                                    <div className={css.goodsPrice}>
                                        <span className={css.Price}>{item.price}</span>
                                        <span className={css.marketPrice}>{item.marketPrice}</span>
                                        <span className={css.addIcon}>
                                            <img src="http://wmall.wochu.cn/h5/hotlist/img/icon-listcart-75@3x.png?v=24d2b0ab1a" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                        :null
                    }
                    <div className={css.nothingMore}>没有更多了~~~</div>
                </div>
        </div>
    }
}
var mapStateToProps = (state)=>{
    return {
         state
    }   
}// 把state映射成属性

var mapDispatchToProps = {
    show,
    hide
} //把dispatch映射成属性


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CateDetail3))


