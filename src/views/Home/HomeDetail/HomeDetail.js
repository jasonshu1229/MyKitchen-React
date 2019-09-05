import React,{Component} from 'react'
import axios from 'axios' 
import css from './HomeDetail.module.scss'
import {show,hide} from "../HomeActionCreator/actionCreator"
import {connect} from 'react-redux'


class HomeDetail extends Component{
    state={
        datalist:null,
        detailList:null
    }

    componentWillMount(){
        this.props.hide()
    }

    componentWillUnmount(){
        this.props.show()
    }

    componentDidMount(){

        // console.log(this.props)
        axios.get(`https://api9.wochu.cn/client/v1/goods/newactivityTemplate?aTId=${this.props.match.params.id}`)
        .then((res)=>{
            if (res.data.data) {
                this.setState({
                    datalist : res.data.data
                })              
            }
            // console.log(this.state.datalist)
        })
        axios.get(`https://api9.wochu.cn/client/v1/goods/newactivityTemplate?aTId=118`)
        .then((res)=>{
                this.setState({
                    detailList : res.data.data
                })              
            // console.log(this.state.detailList)
        })
    }

    render(){
        var datalist = this.state.datalist
        var detailList = this.state.detailList
        return <div className={css.homeDetail}>
            {          
                datalist?
                 <div> 
                {
                    detailList?
                    // console.log(detailList)
                    detailList.areaList.map(item=>
                    <div key={item.aId} className={css.bigCon}>
                        <img src={item.imageUrl} alt="" className={css.bigImg} />
                        {
                            item.shelveList?
                            item.shelveList.map(data=>
                            <div key={data.id} className={css.smallCon}>
                                <img src={data.icon} alt="" className={css.smallImg} />  
                                <div>
                                    <p className={css.goodName}>{data.goodsName}</p>
                                    <div className={css.goodPrice}>
                                    <div className={css.leftCon}>
                                        <p className={css.marketPrice}>{data.marketPrice}</p>
                                        <p className={css.nowPrice}>￥{data.price}</p>
                                    </div>
                                    <div className={css.rightCon}>
                                        <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="" className={css.add} />
                                    </div>
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
                  :<div className={css.coming}>一大<strong style={{verticalAlign:"unset"}}>"波"</strong>惊喜正在赶来~~~</div>
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

export default connect(mapStateToProps,mapDispatchToProps)(HomeDetail)