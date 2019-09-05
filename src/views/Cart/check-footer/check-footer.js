import React, { Component } from 'react';
import css from './check-footer.module.scss'
import GlobalContext from '../../../Components/context/index'
import store from '../../Redux/store'
import {allChecked,allUncheck,singleUnCheck,singleChecked} from '../../../Components/actionCreator'

class Check_footer extends Component {
    state = {  }
    render() {
        // console.log(store.getState().isAllCheckShow)
        return (
            <GlobalContext.Consumer>
                {
                    (context) => {
                        console.log(context)
                        return <div className={css.check_footer}>
                        
                        {/* <div className={css.check_all+' '+css.i_uncheck}></div> */}
                        
                        {
                        store.getState().isAllCheckShow===true?
                            <div className={css.check_all+' '+css.i_checked} onClick={this.switchUncheck}></div>
                            :
                            <div className={css.check_all+' '+css.i_uncheck} onClick={this.switchChecked}></div>
                        }

                        <div className={css.check_price}>
                            <div className={css.cart_total_price} cdcount="0.00">
                                <span>合计：</span>
                                {
                                    store.getState().isAllCheckShow===true?'￥'+context.sumPrice:'￥'+'0.0'
                                }
                                
                            </div>
                            <div className={css.freight}>不含运费</div>
                        </div>
                        
                        {
                            store.getState().isAllCheckShow===true?
                            <div className={css.btn_checkout} id={css.btn_checkout}>结算(?)</div>
                            :
                            <div className={css.btn_uncheckout} id={css.btn_checkout}>结算</div>
                        }

                        <div className={css.btn_coudan}>
                        全场满99包邮 点我凑单
                        <p></p>
                        </div>
                    </div>
                    }
                }
            </GlobalContext.Consumer>
        );
    }

    switchUncheck = ()=>{

        // todo 提交store 变成未全选状态
        store.dispatch(allUncheck())
        store.dispatch(singleUnCheck())
    }

    switchChecked = ()=>{

        // todo 提交store 变成全选状态
        store.dispatch(allChecked())
        store.dispatch(singleChecked())
    }
}

export default Check_footer;