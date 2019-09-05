function show(){
    return {
        type:"ShowTabbar",
        payload:true
    }
}

function hide(){
    return {
        type:"HideTabbar",
        payload:false
    }
}


export {show,hide}