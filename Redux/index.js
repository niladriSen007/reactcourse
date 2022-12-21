import redux from "redux"
import reduxLogger from "redux-logger"
const logger = reduxLogger.createLogger()
const applyMiddleWare = redux.applyMiddleware
const combineReducers = redux.combineReducers;
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"
function buyCake()
{
    return{
        type:"BUY_CAKE",
        info:"First Redux Action"
    }
}

function buyIceCream()
{
    return{
        type:"BUY_ICECREAM",
        info:"First Redux Action"
    }
}


// const initialState = {
//     numberOfCakes:10,
//     numberOfIceCreams:20,
    
// }
const initialCakeState = {
    numberOfCakes:10,

    
}
const initialIceCreamState = {
    numberOfIceCreams:20,
    
}

// const reducer = (state=initialState,action)=>{
//     switch(action.type)
//     {
//         case BUY_CAKE: return{
//             ...state,
//             numberOfCakes: state.numberOfCakes - 1,
//         }
//         case BUY_ICECREAM: return{
//             ...state,
//             numberOfIceCreams: state.numberOfIceCreams - 1,
//         }
//         default : return state
//     }
// }


const cakeReducer = (state=initialCakeState,action)=>{
    switch(action.type)
    {
        case BUY_CAKE: return{
            ...state,
            numberOfCakes: state.numberOfCakes - 1,
        }
       
        default : return state
    }
}

const IceCreamreducer = (state=initialIceCreamState,action)=>{
    switch(action.type)
    {
        case BUY_ICECREAM: return{
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1,
        }
        default : return state
    }
}


const createStore = redux.createStore;

const rootReducer = combineReducers({
    cakle:cakeReducer,
    iceCream:IceCreamreducer,
})

// const store = createStore(reducer)
const store = createStore(rootReducer,applyMiddleWare(logger))


console.log(store.getState());
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()