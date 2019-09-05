import React,{Component} from 'react'
import css from './CateHeader.module.scss'
import {Link} from 'react-router-dom'

class CateHeader extends Component{

render(){
        return <div className={css.CateHeader}>
            <Link to="/search">
                <div className={css.searchCtl}>
                    <img src="http://wmall.wochu.cn/h5/classify/img/icon-search-40@2x.png" alt="" />
                    <div className={css.searchKey}>支持首字母搜索</div>
                </div>
            </Link>
            <div className={css.shadowWrap}></div>
        </div>

    }
}

export default CateHeader