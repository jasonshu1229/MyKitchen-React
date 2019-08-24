import React, { Component } from 'react';
import css from './Tabbar.module.scss'
import {NavLink} from 'react-router-dom' //Link  Navlink

class Tabbar extends Component {
    state = {  }
    render() {
        return (
            <footer className={css.footerBtn} id={css.footerP}>
                <ul>
                    <li className={css.index + " " + css.on}><NavLink to="/home" activeClassName={css.active}><i></i>首页</NavLink></li>
                    <li className={css.shopping}><NavLink to="/category" activeClassName={css.active}><i></i>分类</NavLink></li>
                    <li className={css.cart}><NavLink to="/cart" activeClassName={css.active}><i></i>购物车</NavLink></li>
                    <li className={css.my}><NavLink to="/user" activeClassName={css.active}><i></i>我的</NavLink></li>
                </ul>
            </footer>
        );
    }
}

export default Tabbar;