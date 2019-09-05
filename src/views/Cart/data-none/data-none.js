import React, { Component } from 'react';
import css from './data-none.module.scss'
import {Link} from 'react-router-dom'

class Data_none extends Component {
    state = {  }
    render() {
        return (
            <div className={css.data_none}>
                <div className={css.data_none_img} onClick={this.toCartList}></div>
                <div className={css.data_none_text}>您的购物车为空</div>
                <div className={css.data_none_tip}>可以看看哪些想买的</div>
                <Link to="/home" className={css.data_none_btn}>随便逛逛</Link>
                {/* <div className={css.data_none_btn} onClick={this.toHome}>随便逛逛</div> */}
            </div>
        );
    }

    toCartList = () =>{

        // todo 跳转路径
        // this.props.history.push({ pathname: '/home'});
    }

    toHome = () =>{
        // console.log(this.props.history)
        
        // todo 跳转路径
        // this.props.history.push({ pathname: '/home'});
    }
}

export default Data_none;