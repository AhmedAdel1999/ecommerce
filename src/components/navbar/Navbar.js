import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import { Container , Navbar , Nav } from "react-bootstrap"
import "./Navbar.css"
const Navbarr = (props) =>{
    return(
        <div className="nav-section">
            <Container className='p-0'>
            <Navbar expand="lg" variant="light" className="border-bottom">
                <Navbar.Brand href="/" >
                Shopping Cart
            </Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Products</Link>
                    <Link className="nav-link" to="/cart"><span>{props.data.cartCount}</span>Cart</Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </div>
    )
}
function mapStateToProps(state){
    return{
        data:state
    }
}
export default connect(mapStateToProps,null)(Navbarr);