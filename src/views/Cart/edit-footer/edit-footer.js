import React, { Component } from 'react';
import css from './edit-footer.module.scss';
import GlobalContext from '../../../Components/context/index'
import store from '../../Redux/store'
import { allChecked,allUncheck,singleChecked,singleUnCheck } from '../../../Components/actionCreator'
import { Modal,WingBlank, Toast } from 'antd-mobile';

class Edit_footer extends Component {
    state = { 
        CartListFromCart:[]
     }
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (context) => {
                        return (
                            <footer className={css.edit_footer}>
                                {/* <div className={css.edit_check_all+' '+css.i_uncheck}></div> */}
                                {/* <div className={css.edit_check_all+' '+css.i_checked}></div> */}
                                {
                                    store.getState().isAllCheckShow===true?
                                    <div className={css.edit_check_all+' '+css.i_checked} onClick={this.unCheckAll}></div>
                                    :
                                    <div className={css.edit_check_all+' '+css.i_uncheck} onClick={this.checkAll}></div>
                                }
                                
                                <div className={css.edit_check}>全选</div>
                                
                                <WingBlank size="lg">
                                    <div className={css.delete_btn} id={css.delete_btn} onClick={this.deleteAll}>删除</div>
                                </WingBlank>
                                <div className={css.clear_cart}>清除购物车</div>
                            </footer>
                        )
                    }
                }
            </GlobalContext.Consumer>
        );
    }
    checkAll = ()=>{
        store.dispatch(allChecked())
        store.dispatch(singleChecked())
    }

    unCheckAll = ()=>{
        store.dispatch(allUncheck())
        store.dispatch(singleUnCheck())
    }

    deleteAll = ()=>{
        // console.log(this.state.CartListFromCart)

        const alert = Modal.alert;

        alert('删除', '你真的不后悔吗???', [
            { text: '不啦~手滑', onPress: () => console.log('cancel') },
            {
              text: '删删！！',
              onPress: () =>
                new Promise((resolve) => {
                  Toast.info('全部删除啦~', 1);
                  setTimeout(resolve, 1000);
                  
                }).then(()=>{
                    if (store.getState().isAllCheckShow===true) {
            
                        //todo: 全选按钮选中时，才能删除列表元素
            
                        this.setState({
                            CartListFromCart:[]
                        },()=>{
                            this.props.event(this.state.CartListFromCart)
                        })
                    }else{
                        console.log('应该先选中全选按钮啦~')
                        return
                    }
                }),
            },
          ])

        //todo: 在点击删除按钮之前，应该先判断一下，此时的全选按钮是否选中，如果选中再把数组赋值为[],再进行删除
        // console.log(store.getState().isAllCheckShow)
        // if (store.getState().isAllCheckShow===true) {
            
        //     //todo: 全选按钮选中时，才能删除列表元素

        //     this.setState({
        //         CartListFromCart:[]
        //     },()=>{
        //         this.props.event(this.state.CartListFromCart)
        //     })
        // }else{
        //     console.log('应该先选中全选按钮啦~')
        //     return
        // }

        
    }

    componentWillReceiveProps(props){

        console.log(props)  // {myreceiveCartListClickIndex: Array(2)}
        this.setState({
            CartListFromCart:props.myreceiveCartListClickIndex
        },()=>{
            // console.log(this.state.CartListFromCart)
        })
    }
}

export default Edit_footer;