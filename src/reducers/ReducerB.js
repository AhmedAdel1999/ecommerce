import { INCREASE,DECREASE,CLEAR_CART,ADD_TO_CART,REMOVE,ADD_TO_PRODUCT } from "../components/actions/ActionType"
import {storeProducts} from "../Data"
const inisialstate = {
    storeProducts,
    cart:[],
    pro:[],
    cartCount:0
}
const reducerB = (state=inisialstate,action)=>{
    let storeProducts = [...state.storeProducts]
    let cart = [...state.cart]
    let pro = [...state.pro]
    let cartCount = state.cartCount
    switch (action.type) {
        case ADD_TO_CART:
            cartCount = cartCount + 1
            const item = storeProducts.find(
                (product) => product.id === action.payload.id
              );
              // Check if Item is in cart already
              const inCart = cart.find((item) =>
                 item.id === action.payload.id ? true : false
               );
                storeProducts.forEach((i)=>{
                    if(i.id===action.payload.id){
                        i.inCart=true
                    }
                })
                if(pro.length>0){
                    pro.forEach((i)=>{
                        if(i.id===action.payload.id){
                            i.inCart=true
                        }
                    })
                } 
                console.log(state)
              return{
                storeProducts,
                cart: inCart ? [...cart] : [...cart, { ...item,count:1}],
                pro,
                cartCount
                }

        case ADD_TO_PRODUCT:
            const Item = storeProducts.filter((x)=>{
                return x.id===action.payload.id
            })
            cart.forEach((i)=>{
                if(i.id===action.payload.id){
                    Item.forEach((z)=>{
                        z.inCart=true
                    })
                }
            })
            
            return{
                cart,
                storeProducts,
                pro:[...Item],
                cartCount
            }

        case INCREASE:

            cart.forEach((i)=>{
                if(i.id===action.payload.id){
                    i.count=i.count+1
                }
            })
            return {
                storeProducts,
                pro,
                cart:cart
            }

        case DECREASE:

            cart.forEach((i)=>{
                if(i.id===action.payload.id){
                    i.count=i.count-1
                    if(i.count===0){
                    cartCount = cartCount -1
                    storeProducts.forEach((x)=>{
                         if(x.id===action.payload.id){
                             x.inCart=false
                         }
                     })
                    }
                }
            })
            return {
                pro,
                storeProducts,
                cart:cart.filter((x)=>{
                    return x.count>0
                }),
                cartCount
            }

        case REMOVE:
            cartCount = cartCount -1
            storeProducts.forEach((i)=>{
                if(i.id===action.payload.id){
                    i.inCart=false
                }
            })
            return {
                pro,
                storeProducts,
                cart: cart.filter((item) => item.id !== action.payload.id),
                cartCount
            }

        case CLEAR_CART:
            cartCount = 0
            storeProducts.forEach((i)=>{
                i.inCart=false
            })
            return{
                pro,
                storeProducts,
                cart:[],
                cartCount
            }

        default:
           return state
    }

}
export default reducerB