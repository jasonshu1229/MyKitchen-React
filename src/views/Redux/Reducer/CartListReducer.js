const CartListReducer = (prevState=false,action)=>{

    let {type,payload} = action

    // console.log(type,payload)
    switch (type) {
        case "HiddeCartListItem":
            return payload
        case "ShowCartListItem":
            return payload
        default:
    }

    return prevState
}
export {CartListReducer}