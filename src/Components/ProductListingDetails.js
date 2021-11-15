import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/shopping/shoppingActions';

class ProductListingDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state ={attributeSet: {}};
    }

  render(){
  return (
    <div className="product__details">
        {console.log(this.props.item)}
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.brand}</p>
        {this.props.item.attributes ? this.props.item.attributes.map(elem => 
            <div>
            <p>{elem.name}:</p>
            <ul className="sizing">
                {elem.items.map(item => 
                    <button className="qty__buttons" onClick={()=> 
                        this.setState({attributeSet: {...this.state.attributeSet, [elem.name]: item.displayValue}})}>
                            <li className={this.state.attributeSet[elem.name] === item.displayValue ? "size__btn__selected": ""}>
                                {item.displayValue}
                            </li>
                    </button>
                    )}
            </ul>
        </div>
        ):null}
        <h6>Price:</h6>
        {this.props.item.prices?this.props.item.prices.find(elem =>
            elem.currency === this.props.currency.currency).amount:null} {this.props.currency.symbol}

        {this.props.item? this.props.item.inStock? null : <p className="outofstock__text">OUT OF STOCK </p> : null}
        <button className="addtocart__button" onClick={() => 
            this.props.item.inStock? this.props.addToCart(this.props.item, this.state.attributeSet):{}}>
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
