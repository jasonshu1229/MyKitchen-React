import {createStore,combineReducers,compose} from 'redux'
import {tabbarReducer} from './Reducer/tabbarReducer'
import {loginButtonReducer} from './Reducer/loginButtonReducer'
import {CartListReducer} from './Reducer/CartListReducer'
import {AllCheckReducer} from './Reducer/AllCheckReducer'
import {singleCheckReducer} from './Reducer/singleCheckReducer'

const reducer = combineReducers({
    isTabbarShow:tabbarReducer,
    isLoginShow:loginButtonReducer,
    isCartListShow:CartListReducer,
    isAllCheckShow:AllCheckReducer,
    isSingleCheckShow:singleCheckReducer,
    // CartListIndex:CartListIndexReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers());

export default store;

                        
