import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'
import CateTuijian from './CateTuijian/CateTuijian'
import CateChild from './CateChild/CateChild'
import CateDianxin from './CateDianxin/CateDianxin'
import CateFruit from './CateFruit/CateFruit'
import CategorySlider from './CategorySlider/CategorySlider'
import CateJingcai from './CateJingcai/CateJingcai'
import CateLiangyou from './CateLiangyou/CateLiangyou'
import CateMingcai from './CateMingcai/CateMingcai'
import CateRouqindan from './CateRouqindan/CateRouqindan'
import CateRuyin from './CateRuyin/CateRuyin'
import CateShucai from './CateShucai/CateShucai'
import CateShuichan from './CateShuichan/CateShuichan'
import CateYouxuan from './CateYouxuan/CateYouxuan'
import CateHeader from './CateHeader/CateHeader'
import axios from 'axios'

class Category extends Component {
    state = {  }

    componentDidMount(){
        axios({
            url:"http://api9.wochu.cn/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D"
        }).then(res=>{
            // console.log(res.data.data)
        })
    }

    render() {
        return (
            <div>
                <CateHeader></CateHeader>
                <CategorySlider></CategorySlider>
                <Switch>
                    {/* <Route path="/category/CateTuijian" render={()=>
                        <Nowplaying slideheight={this.state.slideheight}></Nowplaying>
                    }/> */}
                    <Route path="/category/cateTuijian" component={CateTuijian}/>
                    <Route path="/category/cateYouxuan" component={CateYouxuan}/>
                    <Route path="/category/cateMingcai" component={CateMingcai}/>
                    <Route path="/category/cateJingcai" component={CateJingcai}/>
                    <Route path="/category/cateChild" component={CateChild}/>
                    <Route path="/category/cateShucai" component={CateShucai}/>
                    <Route path="/category/cateFruit" component={CateFruit}/>
                    <Route path="/category/cateRouqindan" component={CateRouqindan}/>
                    <Route path="/category/cateShuichan" component={CateShuichan}/>
                    <Route path="/category/cateRuyin" component={CateRuyin}/>
                    <Route path="/category/cateDianxin" component={CateDianxin}/>
                    <Route path="/category/cateLiangyou" component={CateLiangyou}/>
                    <Redirect from="/category" to="/category/CateTuijian"/>
                </Switch>
            </div>
        );
    }
}

export default Category;