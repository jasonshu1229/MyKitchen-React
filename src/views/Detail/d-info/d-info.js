import React, { Component } from 'react';
import css from './d-info.module.scss'

class D_info extends Component {
    state = {  }
    render() {
        var myDetailList = this.props.myDetailList
        return (
            <div className={css.d_info}>
                <div className={css.condition}>
                    <span>产地：</span>
                    {myDetailList.origin1}
                </div>
                <div className={css.condition}>
                    <span className={css.width_14}>保质期：</span>
                    {myDetailList.shelfLife}
                </div>
                <div className={css.condition+ ' '+css.condition_top}>
                    <span>规格：</span>
                    {myDetailList.specification}
                </div>
                <div className={css.condition+' '+css.condition_top}>
                    <span>存储条件：</span>
                    {myDetailList.storageCondition}
                </div>
            </div>
        );
    }
}

export default D_info;