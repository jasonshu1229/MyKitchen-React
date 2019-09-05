const singleCheckReducer = (prevState=true,action)=>{

    let {type,payload} = action

    switch (type) {
        case "CheckedSingle":
            return payload
        case "UnCheckSingle":
            return payload
        default:
            break;
    }

    return prevState
}

export {singleCheckReducer}