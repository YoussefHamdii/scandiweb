import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/shopping/shoppingActions';

class ProductListingDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state ={};
    }

  render(){
  return (
    <div className="product__details">
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.brand}</p>
        <div>
            <p>SIZE:</p>
            <ul className="sizing">
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
            </ul>
        </div>
        <h6>Price:</h6>
        {console.log(this.props.item.prices)}
        {this.props.item.prices?this.props.item.prices.find(elem => elem.currency === this.props.currency).amount:null}
        <button className="addtocart__button" onClick={() => this.props.addToCart(this.props.item.id)}>
            ADD TO CART
        </button>
        <p className="desc">{this.props.item.description}</p>
    </div>
  );}
}

const mapStateToProps = state => {
    return {
        currency: state.shop.currency,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingDetails);
