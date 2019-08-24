import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import React from 'react';
import App from '../App'
import Home from '../views/Home/Home'
import Category from '../views/Category/Category'
import Cart from '../views/Cart/Cart'
import User from '../views/User/User'
import Detail from '../views/Detail/Detail'

const router = 
    <Router>
        <App>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/category' component={Category}/> 
                <Route path='/cart' component={Cart}/>
                <Route path='/user' component={User}/>  
                <Route path="/detail/:myid" component={Detail}/> 
                <Redirect from='/' to='/home'></Redirect>
            </Switch>
        </App>
    </Router>

export default router