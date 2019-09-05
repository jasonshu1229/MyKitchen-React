import React, { Component } from 'react';
import './DetailSwiper.module.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class DetailSwiper extends Component {
    state = {  }
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.props.children}
                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination"></div>
            </div>
            
        );
    }

    componentDidMount(){
        new Swiper('.swiper-container', {
            // direction: 'vertical'
            autoplay: {
              delay: 2500,
              disableOnInteraction: false
            },
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
    }
}

export default DetailSwiper;