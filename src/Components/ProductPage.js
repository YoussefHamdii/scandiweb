import React from 'react';
import ProductListingDetails from './ProductListingDetails';
import ProductShow from './ProductShowCase';
import { connect } from 'react-redux';

class ProductListing extends React.Component {

    constructor(props) {
        super(props);
        this.state ={product: {}};
      }

      componentDidMount(){
        this.setState({product: this.props.products.find(elem => elem.id === window.location.pathname.substr(9))})
      }

  render(){
  return (
    
    <div className="product__page">
        <ProductShow item={this.state.product?this.state.product.gallery:null} />
        <ProductListingDetails item={this.state.product?this.state.product:null} currency={this.props.currency? this.props.currency:0}/>
    </div>
  );}
}

const mapStateToProps = state => {
  return {
    products: state.shop.products,
    currency: state.shop.currency,
  }
}

export default connect(mapStateToProps)(ProductListing);
