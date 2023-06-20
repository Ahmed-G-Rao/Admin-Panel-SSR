import rootReducer from '../src/reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
const Store =configureStore({
    reducer:rootReducer
});
export default Store;















// import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
// // import {productListReducer,productDetailsReducer, productSaveReducer, productDeleteReducer} from './reducers/productReducers';
// // import {cartReducer} from './reducers/cartReducers'
// import thunk from 'redux-thunk';
// // import  Cookie  from 'js-cookie';
// import  {userSigninReducer,userRegisterReducer}  from './reducers/userReducers';
// // const cartItems=Cookie.getJSON("cartItems")||[]
// // const userInfo=Cookie.getJSON("userInfo")||null
// // const initialState={cart:{cartItems},userSignin:{userInfo}};
// const reducer=combineReducers({
//     // productList:productListReducer,
//     // productDetails:productDetailsReducer,
//     // cart:cartReducer,
//     userSignin:userSigninReducer,
//     userRegister:userRegisterReducer,
//     // productSave:productSaveReducer,
//     // productDelete:productDeleteReducer
    
// })
// const store=createStore(reducer,compose(applyMiddleware(thunk)))
// // thunk is a middleware for redux, allow us to apply async operaion inside action in the redux
// export default store;