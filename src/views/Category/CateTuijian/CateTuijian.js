import React,{Component} from 'react'
import axios from 'axios'
import css from './CateTuijian.module.scss'
import {withRouter} from 'react-router'

class CateTuijian extends Component{
    state={
        totals:[]
    }

    componentDidMount(){
        axios({
            url:"http://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList"
        }).then(res=>{
            this.setState({
                totals : res.data.data
            })
            // console.log(this.state.totals)
        })

    }

    render(){
        var totals = this.state.totals
        return <div className={css.tuijian}>
                {
                    totals?
                    totals.map(datalist=>
                        <div key={datalist.id} className={css.classItem}>
                            <div className={css.titleWrap}>
                                <div className={css.floatWrap}>
                                    <span className={css.fl}></span>
                                    <p className={css.label}>{datalist.name}</p>
                                    <span className={css.fr}></span>
                                </div>
                            </div>
                            <ul>
                                {
                                    datalist.children?
                                    datalist.children.map(data=>
                                    <li key={data.id} onClick={()=>this.handleClick(data.urlType,data.url)}>
                                        <img src={data.imgUrl} alt="" />
                                        <p>{data.name}</p>
                                    </li>                                
                                    )
                                    :null
                                }
                            </ul>
                        </div>
                        
                    )
                    :null
                }
             </div>
    }

    handleClick(urlType,id){
        if (urlType==="1") {
            // let url = id
            // let url = JSON.stringify({"aTId":+id.split("=")[1]})
            let url = window.encodeURIComponent(JSON.stringify({"aTId":+id.split("=")[1]}))
            // console.log(window.decodeURIComponent('%7B%22aTId%22%3A469%7D'))
            this.props.history.push(`/catedetail1/${url}`)
            // console.log(url)
        }else{
            // console.log("urlType=3",id)
            let src = window.encodeURIComponent(id)
            // console.log(src)
            this.props.history.push(`/catedetail3/${src}`)
        }
    }
}

export default withRouter(CateTuijian)
// %E6%97%B6%E4%BB%A4%E8%94%AC%E6%9E%9C%E4%B8%93%E5%8C%BA
// http://api9.wochu.cn/client/v1/goods/SearchByTagName?parameters=%7B%22tagname%22:%22%E6%97%B6%E4%BB%A4%E8%94%AC%E6%9E%9C%E4%B8%93%E5%8C%BA%22,%22pageSize%22:10,%22pageIndex%22:1,%22orderId%22:0%7D
// http://api9.wochu.cn/client/v1/goods/SearchByTagName?parameters=%7B%22tagname%22:%22%E6%9C%AC%E5%91%A8%E7%89%B9%E6%83%A0%E4%B8%93%E5%8C%BA%22,%22pageSize%22:10,%22pageIndex%22:1,%22orderId%22:0%7D
