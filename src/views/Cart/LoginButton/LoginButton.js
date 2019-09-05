import React, { Component } from 'react';
import {Link} from 'react-router-dom' //Link  Navlink
import css from './LoginButton.module.scss'

class LoginButton extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Link to="/login" className={css.button_yellow} id={css.btn_notlogin}>登陆</Link>
            </div>
        );
    }
}

export default LoginButton;