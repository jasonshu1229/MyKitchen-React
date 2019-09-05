import React, { Component } from 'react';
import css from './Header.module.scss'
import store from '../../Redux/store'
import { allChecked,allUncheck,singleUnCheck,singleChecked } from '../../../Components/actionCreator'

class Header extends Component {
    state = { 
        text:"编辑"
     }
    render() {
        return (
            <header>
                <div className={css.back} onClick={this.handleBack}>
                    <img src="/img/back (1).png" alt="back"></img>
                </div>
                <div className={css.addr} id={css.chageAddr}>
                    <span className={css.location}>
                        <img src="/img/location.png" alt="location"></img>
                    </span>
                    <p className={css.addr_detail}>请填写地址</p>
                    <span className={css.down_arr}>
                        <img src="/img/down-arr.png" alt="a"></img>
                    </span>
                </div>
                <div className={css.edit} onClick={this.changeText}>{this.state.text}</div>
            </header>
        );
    }

    changeText = ()=>{
        
        if(this.state.text==="编辑"){
            this.setState({
                text:"完成"
            },()=>{

                // todo: 将是编辑状态还是完成状态传给父组件 Cart
                this.props.event(this.state.text)

                // todo 提交store 变成未全选状态
                store.dispatch(allUncheck())
                store.dispatch(singleUnCheck())
            })
        }else if(this.state.text==="完成"){
            this.setState({
                text:"编辑"
            },()=>{
                this.props.event(this.state.text)

                
                store.dispatch(allChecked())
            })
        }
    }
}

export default Header;