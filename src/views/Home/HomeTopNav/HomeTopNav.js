import React,{PureComponent} from 'react'
import topnavCss from './HomeTopNav.module.scss'
import {withRouter} from 'react-router'

class HomeTopNav extends PureComponent{
    render(){
    return <div className={topnavCss.topNav}>
        <ul>
            {
                this.props.topNavList1.map(item=>
                    <li key={item.pos}>
                        <img src={item.imgUrl} alt={item.posDes} />
                    </li>    
                )
            }
        </ul>
        <ul>
            {
                this.props.topNavList2.map(item=>
                    <li key={item.pos}>
                        <img src={item.imgUrl} alt={item.posDes} />
                    </li>    
                )
            }
        </ul>
    </div>

    }
}

export default withRouter(HomeTopNav)