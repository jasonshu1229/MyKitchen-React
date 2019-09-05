import React, { Component } from 'react';
import css from './Login.module.scss'
import store from '../Redux/store'
import { hiddeTabbar,showTabbar,hiddeLoginButton } from '../../Components/actionCreator'
// import {connect} from 'react-redux'

class Login extends Component {
    state = {  }
    render() {
        return (
            <div id={css.box}>
                <div className={css.login_top}>
                    <img src="/img/loginTop.gif" alt="login"></img>
                    <img src="/img/close.png" alt="11" className={css.close} onClick={this.close}></img>
                </div>
                <div className={css.login_tab}>
                    <ul>
                        <li className={css.on}>短信登陆</li>
                        <li className={css.second}>密码登陆</li>
                    </ul>
                </div>
                <div className={css.login_main+ ' '+ css.clearfix}>
                    <div className={css.group_input+ ' ' +css.border_bottom}>
                        <input type="text" placeholder="输入手机号" maxLength="13" id={css.user}></input>
                    </div>
                    <div className={css.group_input}>
                        <div className={css.button}>获取验证码</div>
                        <input type="text" placeholder="输入验证码"></input>
                    </div>
                    <button onClick={this.isLogin}>登陆</button>
                    <div className={css.msg_footer}>
                        <p className={css.msg_noLogin}> 
                            查看
                            <a href="http://wmall.wochu.cn/h5/setUp/serviceProtocol.html">《我厨服务协议及隐私政策</a>
                        </p>
                        <p className={css.msg_register}>免费注册</p>
                    </div>
                </div>
                <div className={css.pop_up_tip}>
                    <div className={css.bg}>
                        <div className={css.title}></div>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }

    componentWillMount(){ 
        console.log('隐藏tabbar');
        // todo: hiddeTabbar()返回的是action对象
        store.dispatch(hiddeTabbar())
    }

    componentWillUnmount(){
        // console.log('显示tabbar')
        store.dispatch(showTabbar())

    }

    isLogin = () =>{
        // console.log(this.props.history);

        // todo 只要点击登陆之后，让Cart组件内的 登陆按钮隐藏
        store.dispatch(hiddeLoginButton())

        // todo sessionStorage.setItem 存入状态
        console.log(hiddeLoginButton())
        var key = hiddeLoginButton().type
        var value = hiddeLoginButton().payload

        sessionStorage.setItem(key,value)

        this.props.history.push({ pathname: '/user'});

    }

    close = ()=>{
        this.props.history.goBack()
    }
}

// var marStateProps = ()=>{
//     return(
//         {
//             lshShow:"1212"
//         }
//     )
// }
export default Login;
// export default connect(marStateProps)(Login);