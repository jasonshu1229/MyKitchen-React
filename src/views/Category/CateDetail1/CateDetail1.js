import React,{Component} from 'react'
import axios from 'axios'
import css from './CateDetail1.module.scss'
import {show,hide} from "../../Home/HomeActionCreator/actionCreator"
import {connect} from 'react-redux'

class CateDetail1 extends Component{
    state={
        datalist:[],
        backImg:null
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
            url:`http://wmall.wochu.cn/client/v1/goods/activityTemplate?parameters=${this.props.match.params.cateid}`
        }).then(res=>{
            // console.log(res.data.data.areaList)
            this.setState({
                datalist:res.data.data.areaList,
                backImg:res.data.data.backgroundImage
            })
        })
    }

    render(){
        let backImage = this.state.backImg
        let detailList = this.state.datalist
        return <div className={css.cateDetail}>
            {
                backImage?
                <div style={{backgroundImage:`url(${backImage})`}} className={css.detailCon}>
                    {
                        detailList.length?
                        // 判断数组是否有值
                        detailList.map(item=>
                        <div key={item.aId} className={css.bigCon}>
                            {
                                // 根据templateType字段判断是否渲染bigImg
                                item.templateType===0?
                                <img src={item.imageUrl} alt="" className={css.bigImg} />
                                // 判断是否存在shelveList字段（是一个数组），若存在，则遍历渲染里面的图片
                                :item.shelveList?
                                item.shelveList.map(data=>
                                <div key={data.id} className={css.smallCon}>
                                    <img src={data.icon} alt="" className={css.smallImg} />  
                                    <div className={css.downCon}>
                                        <p className={css.goodName}>{data.goodsName}</p>
                                        <div className={css.goodPrice}>
                                            <div className={css.leftCon}>
                                                <span className={css.nowPrice}>￥{data.price}
                                                    <i className={css.marketPrice}>{data.marketPrice}</i>                                             
                                                </span>
                                            </div>
                                            <div className={css.rightCon}>加入购物车</div>
                                        </div>
                                    </div>                          
                                </div>
                                )
                                :null
                            }
                        </div>
                        )
                        :null
                    }
                </div>
                :<div>
                    <img src="http://wmall.wochu.cn/h5/activityTemplate/img/vueCommon/loadding.gif" alt="" style={{width:"30%",marginLeft:"35%",marginTop:"50%"}} />
                </div>
            }
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


export default connect(mapStateToProps,mapDispatchToProps)(CateDetail1)