import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import React from 'react';
import App from '../App'
import Home from '../views/Home/Home'
import Category from '../views/Category/Category'
import Cart from '../views/Cart/Cart'
import User from '../views/User/User'
import Detail from '../views/Detail/Detail'
import Login from '../views/Login/Login';
import store from '../views/Redux/store'
import {Provider} from 'react-redux'
// todo 飞哥
import HomeDetail from '../views/Home/HomeDetail/HomeDetail'
import CateDetail1 from '../views/Category/CateDetail1/CateDetail1'
import CateDetail3 from '../views/Category/CateDetail3/CateDetail3'
import Search from '../views/Category/Search/Search'

const router = 
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path="/homedetail/:id" component={HomeDetail}/> 
                    <Route path='/category' component={Category}/> 
                    <Route path="/catedetail1/:cateid" component={CateDetail1}/> 
                    <Route path='/catedetail3/:cateid' component={CateDetail3}/> 
                    <Route path='/cart' component={Cart}/>
                    <Route path='/user' component={User}/>  
                    <Route path='/login' component={Login}/>
                    <Route path="/detail/:myid" component={Detail}/> 
                    <Route path='/search' component={Search}/> 
                    {/* <Route path="/detail" component={Detail}/> */}
                    <Redirect from='/' to='/home'></Redirect>
                </Switch>
            </App>
        </Router>
    </Provider>

export default router