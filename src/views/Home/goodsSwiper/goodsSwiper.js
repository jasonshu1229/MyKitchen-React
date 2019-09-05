import React,{Component} from 'react'
import css from './goodsSwiper.module.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {withRouter} from 'react-router'


class GoodsSwiper extends Component{

    componentDidMount () {
    
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            //   spaceBetween: 30,
            freeMode: true
        });
    }

    render() {
        var goodsSwiper = this.props.goodsSwiper
        // console.log(goodsSwiper)
        return <div className={css.huadongchi}>
                    <div className={"swiper-container"+" "+css.swiper}>
                        <div className={'swiper-wrapper'+" "+css.swiperWrapper}>
                            {
                                goodsSwiper?
                                goodsSwiper.map(item=>
                                <div key={item.pos} className={"swiper-slide"+" "+css.swiperSlide} onClick={()=>this.props.history.push(`detail/${item.source}`)}>
                                    <img src={item.imgUrl} style={{width:'80%',marginLeft:"15%"}} alt="" />
                                    <div>
                                        <p className={css.goodName}>{item.goodsName}</p>
                                        <div className={css.goodPrice}>
                                        <div className={css.leftCon}>
                                            <p className={css.marketPrice}>{item.marketPrice}</p>
                                            <p className={css.nowPrice}>￥{item.price}</p>
                                        </div>
                                        <div className={css.rightCon}>
                                            <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" alt="" className={css.add} />
                                        </div>
                                        </div>
                                    </div>
                                </div>)     
                                :null
                            }
                        </div>
                    </div>
        </div>
    }
}

export default withRouter(GoodsSwiper)