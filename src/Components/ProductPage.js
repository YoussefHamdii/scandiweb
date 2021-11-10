import React from 'react';
import ProductListingDetails from './ProductListingDetails';
import ProductShow from './ProductShowCase';

class ProductListing extends React.Component {

    constructor(props) {
        super(props);
        this.state ={};
      }

  render(){
  return (
    <div className="product__page">
        {console.log(window.location.pathname.substr(9))}
        <ProductShow item={this.props.item?this.props.item.gallery:null} />
        <ProductListingDetails />
    </div>
  );}
}

export default ProductListing;
