
function hiddeTabbar() {
    return(
        {
            type:"HiddeTabbar",
            payload:false
        }
    )
}

function showTabbar() {
    return(
        {
            type:"ShowTabbar",
            payload:true
        }
    )
}

function hiddeLoginButton() {
    return(
        {
            type:"HiddeLoginButton",
            payload:false
        }
    )
}

function showLoginButton() {
    return(
        {
            type:"ShowLoginButton",
            payload:true
        }
    )
}

function hiddeCartListItem() {
    return(
        {
            type:"HiddeCartListItem",
            payload:false
        }
    )
}

function showCartListItem() {
    return(
        {
            type:"ShowCartListItem",
            payload:true
        }
    )
}

function allChecked() {
    return(
        {
            type:"ShowAllChecked",
            payload:true
        }
    )
}

function allUncheck() {
    return(
        {
            type:"HiddeAllChecked",
            payload:false
        }
    )
}

function singleUnCheck(index) {
    return(
        {
            type:"UnCheckSingle",
            payload:false
        }
    )
}

function singleChecked(index) {
    return(
        {
            type:"CheckedSingle",
            payload:true
        }
    )
}



export {hiddeTabbar,showTabbar,hiddeLoginButton,showLoginButton,hiddeCartListItem,showCartListItem,allChecked,allUncheck,singleUnCheck,singleChecked}