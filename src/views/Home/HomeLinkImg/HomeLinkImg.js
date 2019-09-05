import React,{Component} from 'react'
import linkCss from './HomeLinkImg.module.scss'
import {withRouter} from 'react-router'

class HomeLinkImg extends Component{
    render(){
        var imgUrl = this.props.ImgUrl
        var id
        // // console.log(imgUrl)
        if (imgUrl) {
            id = +imgUrl.source.split("=")[1]
        }
        // console.log(id)
        return( 
              <div className={linkCss.linkImg} >
                  {
                    imgUrl?
                    // console.log(imgUrl.source)
                   <img src={imgUrl.imgUrl} alt="" onClick={()=>this.props.history.push(`homedetail/${id}`)} />
                   :null
                  }
              </div>
              )
    }
}

export default withRouter(HomeLinkImg)
