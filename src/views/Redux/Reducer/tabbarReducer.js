const tabbarReducer = (prevState=true,action)=>{
    // console.log(action)
    let { type,payload } = action

    switch (type) {
        case "HiddeTabbar":
            return payload
        case "ShowTabbar":
            return payload
        default:
    }

    // console.log(prevState)
    return prevState

}

export { tabbarReducer };