import React, { Component } from 'react';
import css from './User.module.scss'
//引入分组件
import Header from './header_logo/header_logo'

class User extends Component {
    state = {  }
    render() {
        return (
            <div id={css.center_App} className={css.content}>
                <Header></Header>
            </div>            
        );
    }
}

export default User;