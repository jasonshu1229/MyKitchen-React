import React,{Component} from 'react'
import css from './HomeGoodsList.module.scss'
import {withRouter} from 'react-router'

class HomeGoodsList extends Component{
    render(){
        let goodsList = this.props.goodsList
        // console.log(goodsList)
        return <div className={css.HomegoodsList}>
                    <ul>
                    {/* <slot></slot> */}
                    {
                        goodsList?
                        goodsList.map(data=>            
                        <li key={data.pos} onClick={()=>this.handleClick(data.source)}>
                            {
                                data.labels?                               
                                    data.labels.length?
                                    data.labels.map((label,index)=>
                                    <div key={index} className={css.goodLabel}>
                                        <img src={label.labelUrl} className={css.label} alt="" />
                                    </div>                                        
                                    )
                                    :null                               
                                :null
                            }
                            <img src={data.imgUrl} alt="" className={css.goodImg} />
                            {
                                data.stock?
                                null:
                                <div className={css.imgHover}>已抢完</div>
                            }
                            {
                                data.stock? 
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
                                :
                                <div>                       
                                <p className={css.goodName2}>{data.goodsName}</p>
                                <div className={css.goodPrice2}>
                                    <div className={css.leftCon2}>
                                        <p className={css.marketPrice2}>{data.marketPrice}</p>
                                        <p className={css.nowPrice2}>￥{data.price}</p>
                                    </div>
                                    <div className={css.rightCon2}>
                                        <img src="http://wmall.wochu.cn/h5/home/vueimg/disadd@3x.png" alt="" className={css.add} />
                                        </div>
                                </div>
                            </div>


                            }
                        </li>
                        )
                        :null
                    }
                    </ul>
                </div>
    }
    handleClick(id){
        // console.log(this.props.history)
        this.props.history.push(`detail/${id}`)
    }
}

export default withRouter(HomeGoodsList)