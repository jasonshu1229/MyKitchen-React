import React, { Component } from 'react';
import css from './DetailMain.module.scss'

class DetailMain extends Component {
    state = {  }
    render() {
        // console.log(this.props.myDetailList)
        var myDetailList = this.props.myDetailList
        return (
            <div className={css.detailMain}>
                <div dangerouslySetInnerHTML={{ __html: myDetailList.descriptionDetail }} className={css.mydetail}></div>
            </div>
        );
    }
}

export default DetailMain;