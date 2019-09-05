import React,{Component} from 'react'
import css from './CateContent.module.scss'

class CateContent extends Component{

    render(){
        var parentId = this.props.parentId
        var datalist = this.props.datalist
        return <div className={css.youxuan}>
                    {
                        datalist?
                        datalist.map(data=>                            
                        <div key={data.id} className={css.listCon}>
                            {
                                data.parentId===parentId?
                                <div className={css.content}>
                                    <img src={data.checkicon} className={css.conImg} alt="" />
                                    <p className={css.conName}>{data.name}</p>
                                </div>
                                :null
                            }
                        </div>                       
                        )
                        :null
                    }
                </div>
    }
}

export default CateContent