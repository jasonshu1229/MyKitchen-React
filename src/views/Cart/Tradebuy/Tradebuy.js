import React, { Component } from 'react';
import css from './Tradebuy.module.scss'

class Tradebuy extends Component {
    state = {  }
    render() {
        return (
            <div className={css.cart_list_item+' '+css.margin_bottom}>
                <div className={css.promotion_msg}>
                    <span>换购</span>
                    <span className={css.promotion_info}>满79元，可换购千禧圣女果500g，还差74.10元</span>
                    <span className={css.promotion_modify+ ' ' +css.purchase_list_item}>立即换购</span>
                </div>
            </div>
        );
    }
}

export default Tradebuy;