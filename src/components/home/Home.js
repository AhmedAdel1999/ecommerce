import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {Container} from "react-bootstrap"
import {connect} from "react-redux"
import {addToCard,addToProduct} from "../actions/Actions"
import "./Home.css"

const Home  = (props) =>{
  return(
    <div className="products">
        <p>our products</p>
        <Container>
            <div className="main-products">
                {props.data.storeProducts.map((i)=>{
                    return(
                        <div className="product-box" key={i.id}>
                            <div className="pro-img">
                                <Link to={`/product`}><img src={i.img} alt={i.title} onClick={()=>props.addToProduct(i.id)} /></Link>
                                {i.inCart?(<div><FontAwesomeIcon icon={faCheck} /></div>):(
                                <div onClick={()=>props.addToCard(i.id)}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </div>
                                )}
                            </div>
                            <div className="pro-info">
                                <p>{i.title}</p>
                                <p>${i.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
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
        addToCard:(id)=> dispatch(addToCard(id)),
        addToProduct:(id)=> dispatch(addToProduct(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);