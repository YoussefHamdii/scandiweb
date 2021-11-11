import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Category from './Components/CategoryPage';
import Navigation from './Components/NavigationComponent';
import ProductListing from './Components/ProductPage';
import CartPage from './Components/CartPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render(){
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Category />} />
          <Route path="/product/:productId" element={<ProductListing />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );}
}

export default App;
