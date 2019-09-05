import React,{Component} from 'react'
import css from './HomeGroupList.module.scss'
import {withRouter} from 'react-router'

class HomeGroupList extends Component{
    render(){
        var groupList3 = this.props.groupList3
        // console.log(groupList3)
        return <div className={css.groupList3}>
                    {
                        groupList3?
                        groupList3.map((item)=>
                            <div key={item.pos}>
                                <img src={item.imgUrl} alt="" />
                            </div>
                        )
                        :null
                    }
                </div>
    }
}

export default withRouter(HomeGroupList)