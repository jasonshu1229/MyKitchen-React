import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabbar from './Components/Tabbar/Tabbar'
import store from './views/Redux/store'
import GlobalContext from './Components/context/index'

class App extends Component {
  
  state = { 
    isTabbarShow:true,
    isLoginButtonShow:true
   }

  componentWillMount(){
    
    store.subscribe(()=>{

      console.log('store状态改变了',store.getState())
      this.setState({
        isTabbarShow:store.getState().isTabbarShow,
        isLoginButtonShow:store.getState().isLoginShow
      })
    })
  }

  render() {
    return (
      <GlobalContext.Provider value={
        {
          // todo 生厂商提供的服务
          mystateChild1:this.state.isLoginButtonShow,
          myname:"lsh"

          // sendmessage:(data)=>{
          //   this.setState({
          //     isLoginButtonShow:data
          //   })
          // }
        }
      }>
        <div>
          {
            this.state.isTabbarShow?<Tabbar {...this.state}/>:null
          }
          {this.props.children}
        </div>
      </GlobalContext.Provider>
    );
  }
}

export default App;
