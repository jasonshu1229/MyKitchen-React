import React,{PureComponent} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import headerCss from './HomeHeader.module.scss'

class HomeHeader extends PureComponent{
    state={
        headerCon:''
    }
    
    componentDidMount(){
        axios({
            url:"http://api9.wochu.cn/client/v1/sameday/getLoadHomeSameDayInfo"
        }).then(res=>{
            // console.log(res.data.data.address)
            this.setState({
                headerCon:res.data.data.address
            })
        })
    }
    
    render(){
        return (<div className={headerCss.homeHeaderBar}>
            <div>
                <Link to="/home" className={headerCss.logo}>
                <img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png" alt="LOGO" />
                </Link>
            </div>
            <div>
                <Link to="/user" className={headerCss.address}>
                <span className={headerCss.addressCon}>{this.state.headerCon}</span>
                <span className={headerCss.addressIco}>
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/icon.png" alt="查看" />
                </span>
                </Link>
            </div>

            <div className={headerCss.search}>
                <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png" alt="" />
            </div>
      </div>)

    }
}

export default HomeHeader