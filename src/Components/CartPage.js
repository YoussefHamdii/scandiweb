import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';

class CartPage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={cart: []};
      }

      componentDidMount(){
        this.setState({ cart: this.props.cart});
      }
      componentWillReceiveProps = nextProps => {
          if (nextProps.cart !== this.props.cart){
            this.setState({ cart: nextProps ? nextProps.cart:null});
          }
      }


  render(){
  return (
    <div className="cart__page">
        <h2>CART</h2>
        <div>
        {this.state.cart.map((item, index) => 
            <CartItem key={index} item={item} currency={this.props.currency} />)}
        </div>
    </div>
  );}
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        products: state.shop.products,
        currency: state.shop.currency,
    }
}

export default connect(mapStateToProps)(CartPage);
