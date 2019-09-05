import React, { Component } from 'react';
import store from '../../views/Redux/store'

const withChangeButon = (SelfComponent)=>{

    return class WithChangeButon extends Component {
        
        state = {
            isLoginButtonShow:true
        }

        componentWillMount(){

            store.subscribe(()=>{
    
                console.log('store里的loginButton状态改变了',store.getState())
    
                this.setState({
                    isLoginButtonShow:store.getState().isLoginShow
                })
            })
         }

        render() {
            return (
                <div>
                    <SelfComponent isLoginButtonShow={this.state.isLoginButtonShow}></SelfComponent>
                </div>
            );
        }
    }
    
}
export default withChangeButon;