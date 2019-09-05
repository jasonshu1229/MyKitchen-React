import React,{PureComponent} from 'react'
import BroadCss from './HomeBroadcast.module.scss'
import {withRouter} from 'react-router'

class HomeBroadcast extends PureComponent{
    render(){
        var content = this.props.broadlist
        // console.log(this.props.titleImg)
        return  (<div className={BroadCss.wochuBroadcast}>
        <div className={BroadCss.broadcastTitle}>
          <img src={this.props.titleImg} alt="" />
        </div>
        <div className={BroadCss.broadcastCon}>
          <div className={BroadCss.scrollContent}>
            <ul>
              {
                  content.map(item=>
                    <li key={item.pos}>{item.title}</li>
                )
              }
            </ul>
          </div>
          <div className={BroadCss.showall}>
            <img src="http://wmall.wochu.cn/h5/home/vueimg/down@3x.png" alt="down" />
          </div>
        </div>
      </div>)
  

    }
}

export default withRouter(HomeBroadcast)