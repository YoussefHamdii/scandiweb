import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/shopping/shoppingActions';
import { connect } from 'react-redux';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state ={currency: ["$", "£", "$", "₽", "¥"]};
      }

      addToCartDefault(item){
        var atr = {};
        this.props.item.attributes.map((attribute, index) => atr[attribute.name] = attribute.items[0].displayValue);
        return atr;
      }

  render(){
  return (
    
    <button className="card__content__container">
        <div className={this.props.item.inStock? "" :"overlay"}>
          <div className="card__img__container">
          <Link className="link" to={`/product/${this.props.item.id}`} >
            <img src={this.props.item.gallery[0]} alt="img" className="card__img"/>
          </Link>
          {this.props.item.inStock ? null : <div className={this.props.item.inStock?"":"text__overlay"}>OUT OF STOCK</div>}
          {this.props.item.inStock ? 
          <img src="/Circle.png" alt="img" className="cart__circle" onClick={() => 
            {this.props.addToCart(this.props.item, this.addToCartDefault(this.props.item))}}/>
          :null}
            
          </div>
          <p>{`${this.props.item.brand} ${this.props.item.name}`}</p>
          <p className="price__txt">
            {this.props.item.prices.find(elem => elem.currency === this.props.currency.currency).amount} {this.props.currency.symbol}
          </p>
        </div>
    </button>
  );}
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, size) => dispatch(addToCart(id, size))
  }
}

const mapStateToProps = state => {
  return{
    currency: state.shop.currency,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
