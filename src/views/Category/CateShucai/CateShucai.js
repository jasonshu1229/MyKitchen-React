import React,{Component} from 'react'
import CateContent from '../CateContent/CateContent'
import axios from 'axios'

class CateShucai extends Component{
    state={
        datalist:[],
        parentId:6
    }

    componentDidMount(){
        axios({
            url:"http://api9.wochu.cn/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D"
        }).then(res=>{
            // console.log(res.data.data)
            this.setState({
                datalist:res.data.data
            })
        })
    }

    render(){
        return( 
            <CateContent parentId={this.state.parentId} datalist={this.state.datalist}></CateContent>
        )

    }
}
export default CateShucai