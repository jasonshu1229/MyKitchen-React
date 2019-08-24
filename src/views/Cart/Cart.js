import React, { Component } from 'react';
import css from './Cart.module.scss'
import {NavLink} from 'react-router-dom' //Link  Navlink

class Cart extends Component {
    state = {  }
    render() {
        return (
            <section className="no-result">Cart
                {/* <NavLink to="/user" activeClassName="button-yellow">登陆</NavLink> */}
            </section>            
        );
    }
}

export default Cart;