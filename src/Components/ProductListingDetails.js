import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/shopping/shoppingActions';

class ProductListingDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state ={size: ""};
    }

  render(){
  return (
    <div className="product__details">
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.brand}</p>
        <div>
            <p>SIZE:</p>
            <ul className="sizing">
                <button className="qty__buttons" onClick={()=> this.setState({size: "S"})}><li className={this.state.size === "S"? "size__btn__selected": ""}>S</li></button>
                <button className="qty__buttons" onClick={()=> this.setState({size: "M"})}><li className={this.state.size === "M"? "size__btn__selected": ""}>M</li></button>
                <button className="qty__buttons" onClick={()=> this.setState({size: "L"})}><li className={this.state.size === "L"? "size__btn__selected": ""}>L</li></button>
                <button className="qty__buttons" onClick={()=> this.setState({size: "XL"})}><li className={this.state.size === "XL"? "size__btn__selected": ""}>XL</li></button>
            </ul>
        </div>
        <h6>Price:</h6>
        {this.props.item.prices?this.props.item.prices.find(elem => elem.currency === this.props.currency).amount:null}
        {this.props.item? this.props.item.inStock? null : <p className="outofstock__text">OUT OF STOCK </p> : null}
        <button className="addtocart__button" onClick={() => this.props.addToCart(this.props.item.id, this.state.size)}>
            ADD TO CART
        </button>
        <span dangerouslySetInnerHTML={{__html: this.props.item.description}}/>
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
        addToCart: (id, size) => dispatch(addToCart(id, size))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingDetails);
