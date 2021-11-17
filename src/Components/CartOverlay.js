import React from 'react';
import CartOverlayItem from './CartOverlayItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CartOverlay extends React.Component {

    constructor(props) {
        super(props);
        this.state ={cart: []};

        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
      }

      componentDidMount(){
        this.setState({ cart: this.props.cart});
        document.addEventListener('mousedown', this.handleClickOutside);
      }
      componentWillReceiveProps = nextProps => {
        if (nextProps.cart !== this.props.cart){
          this.setState({ cart: nextProps ? nextProps.cart:null});
        }
    }
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
          this.props.toggleHandler(false);
      }
  }
  countItems(){
    let x = 0;
    this.props.cart.map(item => (x= x+item.qty))
    return x;
  }

  calculateTotal(){
    let y = 0;
    this.props.cart.map(item => (y = y+(item.qty * item.prices.find(elem => elem.currency === this.props.currency.currency).amount)))
    return y.toFixed(2);
  }


  render(){
  return (
    <div className="cart__page__overlay" ref={this.wrapperRef}>
        <p><span className="bold__text">My Bag: </span>{this.countItems()} items</p>
        <div>
        {this.state.cart.map((item, index) => 
            <CartOverlayItem key={index} item={item} currency={this.props.currency} 
            product={this.props.products.find(elem => elem.id === item.id)}
            />)}
        </div>
        <p>Total: {this.calculateTotal()}{this.props.currency.symbol}</p>
        <div className="minicart__buttons">
            <button className="cart__button" onClick={()=> this.props.toggleHandler(false)}>
              <Link className="link" to="/cart">VIEW BAG
              </Link>
            </button>

            <button className="checkout">CHECK OUT</button>
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

export default connect(mapStateToProps)(CartOverlay);
