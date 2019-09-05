const AllCheckReducer = (prevState=true,action)=>{

    let {type,payload} = action

    // console.log(type,payload)
    switch (type) {
        case "HiddeAllChecked":
            return payload
        case "ShowAllChecked":
            return payload
        default:
    }

    return prevState
}
export {AllCheckReducer}