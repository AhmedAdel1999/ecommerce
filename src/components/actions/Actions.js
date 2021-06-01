import {INCREASE,DECREASE,REMOVE,CLEAR_CART,ADD_TO_CART,ADD_TO_PRODUCT} from "./ActionType"
export const addToCard = (id) =>{
    return{
        type:ADD_TO_CART,
        payload:{
            id:id
        }
    }
}
export const addToProduct = (id) =>{
    return{
        type:ADD_TO_PRODUCT,
        payload:{
            id:id
        }
    }
}
export const increase = (id) =>{
    return{
        type:INCREASE,
        payload:{
            id:id
        }
    }
}
export const decrease = (id) =>{
    return{
        type:DECREASE,
        payload:{
            id:id
        }
    }
}
export const remove = (id) =>{
    return{
        type:REMOVE,
        payload:{
            id:id
        }
    }
}
export const clearcart = () =>{
    return{
        type:CLEAR_CART
    }
}