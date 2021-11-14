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
        this.setState({ cart: this.props.cart.map(item => this.props.products.find(elem => elem.id === item.id))});
        document.addEventListener('mousedown', this.handleClickOutside);
      }
      componentWillReceiveProps = nextProps => {
          if (nextProps.cart !== this.props.cart){
            this.setState({ cart: nextProps ? nextProps.cart.map(item => this.props.products.find(elem => elem.id === item.id)):[]});
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


  render(){
  return (
    <div className="cart__page__overlay" ref={this.wrapperRef}>
        <h6>CART</h6>
        <div>
            {this.state.cart.map(item => 
            <CartOverlayItem item={item} currency={this.props.currency} qty={this.props.cart.length !== 0 ?
             this.props.cart.find(elem => elem.id === item.id).qty:null} 
             size={this.props.cart.length !== 0 ? this.props.cart.find(elem =>
            elem.id === item.id).size:null}/>)}
            
        </div>
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
