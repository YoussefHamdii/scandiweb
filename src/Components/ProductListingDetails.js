import React from 'react';

class ProductListingDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state ={};
      }

  render(){
  return (
    <div className="product__details">
        <h2>XBOX SERIES 1</h2>
        <p>Fine technology</p>
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
        400 $
        <button className="addtocart__button">
            ADD TO CART
        </button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );}
}

export default ProductListingDetails;
