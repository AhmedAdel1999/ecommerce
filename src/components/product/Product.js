import React from "react"
import {connect} from "react-redux"
import { Link } from "react-router-dom"
import {addToCard} from "../actions/Actions"
import {Container,Row,Col} from "react-bootstrap"
import "./Product.css"

const Product = (props) =>{
    const length = props.data.pro.length
    return(
        <div className="product-section">
            {length?(
                props.data.pro.map((x)=>{
                    return (
                        <div key={x.id} className="prod-details">
                            <Container>
                                <Row>
                                    <Col><div className="prod-name">{x.title}</div></Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} sm={12} xs={12}>
                                       <div className="prod-img">
                                           <img src={x.img} alt={x.title} />
                                       </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12}>
                                       <div className="prod-info">
                                           <p>Model : {x.title}</p>
                                           <p>made by : {x.company}</p>
                                           <p>price : {x.price}$</p>
                                       </div>
                                       <div className="prod-about">
                                           <h6>some info about product:</h6>
                                           <p>{x.info}</p>
                                       </div>
                                       <div className="prod-controls">
                                           <button><Link to="/">back to product</Link></button>
                                           {x.inCart?(
                                               <button>in cart</button>
                                           ):(
                                            <button onClick={()=>props.addToCard(x.id)}>add to cart</button> 
                                           )}
                                           
                                       </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )
                })
            ):null}
        </div>
    )
}
const mapStateToProps= (state)=>{
    return{
        data:state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addToCard:(id)=> dispatch(addToCard(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);