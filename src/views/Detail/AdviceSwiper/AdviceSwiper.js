import React, { Component } from 'react';
import css from './AdviceSwiper.module.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

class AdviceSwiper extends Component {
    state = {  }
    render() {
        // console.log(this.props.myAdviceList)
        return (
            <div className={css.d_advice_info}>
                {
                    this.props.myAdviceList.map((item,index)=><div className={css.advice_group} key={item.goodsGuid}>
                        <div className="swiper-container"></div>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className={css.group_icon}></div>
                                <img src={item.picUrl} alt="uniqe" onClick={()=>{
                                    this.handleSkip(item)
                                }}></img>
                                <div className={css.group_name+' '+css.ellipsis}>{item.goodsName}</div>
                                <div className={css.m_price}>{item.marketPrice}</div>
                                <div className={css.o_price}>{item.price}</div>
                                <div className={css.add_cart}>
                                    <img src="/img/add cart.png" alt="addcart"></img>
                                </div>
                            </div>
                        </div>

                        {/* 留好插槽给轮播的图片等信息 */}
                        {this.props.children}
                    </div>)
                }
                
            </div>
        );
    }

    handleSkip = (item)=>{
        console.log(item.goodsGuid)
        console.log(this.props.history)  // undefined
        // this.props.history.push(`/detail/${item.goodsGuid}`)
    }

    componentDidMount(){
        // console.log(this.props.match.params.myid)

        new Swiper('.' + this.myclass, {
            // direction: 'vertical'
            //todo: 当前可视窗口可预览几张图片，preview需要从父组件上传过来
            slidesPerView: this.props.preview,
            spaceBetween: this.myclass === 'adviceswiper' ? 0.36 : '',
            freeMode: true,
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            //     hide: false,
            //   },
          })
          
    }
}

export default AdviceSwiper;