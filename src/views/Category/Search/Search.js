import React,{Component} from 'react'
import {show,hide} from '../../Home/HomeActionCreator/actionCreator'
import {connect} from 'react-redux'
import css from './Search.module.scss'

class Search extends Component{
    state={
        searchList:[],
        hotSearch:["牛排","豆腐","年货","火锅","羊肉","特供蔬菜","冷冻"],
        dataList:[]
    }

    componentWillMount(){
        var data =JSON.parse(localStorage.getItem("inputValue"))
        console.log(data)
        // this.setState({
        //     dataList:[...data]
        // })
        this.props.hide()
    }
    componentWillUnmount(){
        this.props.show()
    }

    render(){
        return <div className={css.Search}>
        <div className={css.searchHeader}>
            <div className={css.searchView}>
                <div className={css.back}>
                    <img src="http://wmall.wochu.cn/h5/classify/img/back.png?v=7c8bfcd628" alt="" />
                </div>
                <div className={css.searchCtl}>
                    <img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png" alt="" />
                    <input className={css.searchKey} ref="myInput"/>
                </div>
                <div className={css.searchBtn} onClick={()=>this.getInputValue()}>搜索</div>
            </div>
        </div>
        
        <div className={css.searchCon}>
            <div className={css.hotSearch}>
                <p>热门搜索</p>
                <ul>
                    {
                        this.state.hotSearch.map((item,index)=>
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
            </div>

            <div className={css.searchHis}>
                <p>搜索历史</p>
                <ul>
                    {
                        // console.log(this.state.dataList)
                        this.state.dataList.length?
                        this.state.dataList.map((item,index)=>
                            <li key={index}>{item}</li>
                        )
                        :null
                    }
                </ul>
                <div className={css.cleanHis} onClick={()=>this.handleDelClick()}>清空搜索记录</div>
            </div>
        </div>

    </div>
    }

    getInputValue(){
        if (this.refs.myInput.value==='') {
            return 
        }else{
            this.setState({
                dataList:[...this.state.dataList,this.refs.myInput.value],
            },()=>{
                // console.log(this.state.dataList)
                var saveValue = JSON.stringify(this.state.dataList)
                localStorage.setItem("inputValue",saveValue)

                // console.log(saveValue)
            })
            this.refs.myInput.value = ''
        }
    }

    handleDelClick(){
        var newList = []
        if (this.state.dataList.length===0) {
            return
        }else{
            this.setState({
                dataList:[...newList]
            })
            localStorage.setItem("inputValue",JSON.stringify(this.state.dataList))

        }
    }

}



var mapStateToProps = (state)=>{
    return {
         state
    }   
}// 把state映射成属性

var mapDispatchToProps = {
    show,
    hide
} //把dispatch映射成属性

export default connect(mapStateToProps,mapDispatchToProps)(Search)