import React, { Component } from 'react';
import css from './d-rate.module.scss'

class D_rate extends Component {
    state = {  }
    render() {
        return (
            <div className={css.d_rate+' '+css.clearfix}>
                <span>商品评价</span>
                <img src="/img/next.png" alt="next.png"></img>
            </div>
        );
    }
}

export default D_rate;