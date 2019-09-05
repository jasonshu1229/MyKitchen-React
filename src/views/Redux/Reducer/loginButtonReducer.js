const loginButtonReducer = (prevState=true,action)=>{
    
    let { type,payload } = action

    switch (type) {
        case "HiddeLoginButton":
            return payload
        case "ShowLoginButton":
            return payload
        default:
            break;
    }


    return prevState
}

export {loginButtonReducer}