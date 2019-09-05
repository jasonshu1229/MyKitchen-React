import React,{Component} from 'react'
import axios from 'axios'

class CateDetail2 extends Component{

    componentDidMount(){
        axios({
            url:`http://api9.wochu.cn/client/v1/goods/SearchByTagName?parameters=%7B%22tagname%22:%22%${this.props.match.params.cateid}%22,%22pageSize%22:10,%22pageIndex%22:1,%22orderId%22:0%7D`
        }).then(res=>{
            console.log(res.data)
        })
    }

    render(){
        return <div></div>

    }
}

export default CateDetail2