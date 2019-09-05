import React,{Component} from 'react'
import css from './HomeTempList.module.scss'
import {withRouter} from 'react-router'

class HomeTempList extends Component{
    render(){
        var tempList = this.props.tempList
        var imgView = this.props.imgView
        var labelView = this.props.labelView
        var priceList = this.props.priceList
 
        return (<div>
            {
                tempList.items?
                    tempList.items.length?
                    <div className={css.tempList1} onClick={()=>this.props.history.push(`/detail/${tempList.items[0].source}`)}>
                        <div className={css.tempTitle}>
                            <span></span>
                            <em>{tempList.title}</em>
                            <span></span>
                        </div>
                        <ul>
                            <li>
                                <div className={css.imgView1}>
                                    <img src={imgView.imgUrl} alt="" />
                                    <div className={css.imgView2}>
                                        {
                                            labelView?
                                                labelView.length? 
                                                <img src={labelView[0].labelUrl} alt="" />
                                                :null
                                            :null
                                        }
                                    </div>
                                </div>
                                <div className={css.tempGoodsInfo}>
                                    <p className={css.tempGoodsName}>{imgView.goodsName}</p>
                                    <p className={css.goodsIntro}>{imgView.description}</p>
                                    <div className={css.tempGoodsPrice}>
                                        <div className={css.realPrice}>
                                            ￥
                                            <span className={css.beforePoint}>{priceList[0]}</span>
                                            <span className={css.afterPoint}>.{priceList[1]}</span>
                                        </div>
                                        <div className={css.addToCart}>
                                            <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    :null
                :null
            }
        </div>
        )
    }
}

export default withRouter(HomeTempList)