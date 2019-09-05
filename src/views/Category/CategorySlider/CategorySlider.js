import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './CategorySlider.module.scss'
class CategorySlider extends Component{
    render(){
        // console.log(this.props.isFixed)
        return <div className={css.CategorySlider} >
             <ul>
                {/* <li><NavLink to="/film/nowplaying" activeClassNameName={css.active} replace>正在上映</NavLink></li>
                <li><NavLink to="/film/comingsoon" activeClassNameName={css.active} replace>即将上映</NavLink></li> */}
                <li><NavLink to="/category/cateTuijian" activeClassName={css.myfocus} replace>推荐</NavLink></li>
                <li><NavLink to="/category/cateYouxuan" activeClassName={css.myfocus} replace>我厨优选</NavLink></li>
                <li><NavLink to="/category/cateMingcai" activeClassName={css.myfocus} replace>餐馆名菜</NavLink></li>
                <li><NavLink to="/category/cateJingcai" activeClassName={css.myfocus} replace>全部净菜</NavLink></li>
                <li><NavLink to="/category/cateChild" activeClassName={css.myfocus} replace>儿童专区</NavLink></li>
                <li><NavLink to="/category/cateShucai" activeClassName={css.myfocus} replace>蔬菜</NavLink></li>
                <li><NavLink to="/category/cateFruit" activeClassName={css.myfocus} replace>水果</NavLink></li>
                <li><NavLink to="/category/cateRouqindan" activeClassName={css.myfocus} replace>肉禽蛋</NavLink></li>
                <li><NavLink to="/category/cateShuichan" activeClassName={css.myfocus} replace>水产海鲜</NavLink></li>
                <li><NavLink to="/category/cateRuyin" activeClassName={css.myfocus} replace>乳饮西点</NavLink></li>
                <li><NavLink to="/category/cateDianxin" activeClassName={css.myfocus} replace>点心素食</NavLink></li>
                <li><NavLink to="/category/cateLiangyou" activeClassName={css.myfocus} replace>粮油副食</NavLink></li>
            </ul>
        </div>
    }
}

export default CategorySlider