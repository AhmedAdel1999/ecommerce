import Home from "./components/home/Home"
import Navbarr from "./components/navbar/Navbar"
import Cart from "./components/cart/Cart"
import Product from "./components/product/Product"
import {Switch , Route , BrowserRouter as Router} from "react-router-dom"
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbarr />
          <Switch>
            <Route path="/" exact strict component={Home}/>
            <Route path="/cart" exact strict component={Cart} />
            <Route path="/product" exact strict component={Product} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
