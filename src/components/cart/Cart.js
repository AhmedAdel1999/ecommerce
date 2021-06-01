import React from "react"
import {connect} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {increase,decrease,clearcart,remove} from "../actions/Actions"
import "./Cart.css"

const Cart = (props) =>{
    let length = props.data.cart.length
    let total = 0;
    return(
        <div className="cart-section">
            {length?(
              <div className="cart-items">
              {props.data.cart.map((i)=>{
                  total = total + (i.count*i.price)
                  return(
                      <React.Fragment key={i.id}>
                        <div className="cart-item">
                            <div className="img">
                                <img src={i.img} alt={i.title} />
                            </div>
                            <div className="info">
                                <p>{i.title}</p>
                                <p>item price: {i.price}$</p>
                                <div className="controls">
                                    <button onClick={()=>props.decrease(i.id)}><FontAwesomeIcon icon={faMinus} /></button>
                                    <span>{i.count}</span>
                                    <button onClick={()=>props.increase(i.id)}><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                                <div className="footer">
                                    <span>total: {i.count*i.price}$</span>
                                    <span onClick={()=>props.remove(i.id)}><FontAwesomeIcon icon={faTrashAlt} /></span>
                                </div>
                            </div>
                        </div>
                      </React.Fragment>
                  )
              })}
              </div>

            )
            :(<p className="cart-head">your cart is empty</p>)}
            {length?(
                <div className="finalbox">
                  <div><button onClick={()=>props.clearcart()}>CLEAR CART</button></div>
                  <div>
                      <p><span>subtotal</span> : {total}$</p>
                      <p><span>tax</span> : 1$</p>
                      <p><span>total</span> : {total + 1}$</p>
                  </div>
                </div>
            ):null}
        </div>
    )
}
function mapStateToProps(state){
    return{
        data:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        increase:(id)=> dispatch(increase(id)),
        decrease:(id)=> dispatch(decrease(id)),
        remove:(id)=> dispatch(remove(id)),
        clearcart:()=> dispatch(clearcart())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);