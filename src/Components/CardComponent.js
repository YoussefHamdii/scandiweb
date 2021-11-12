import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state ={};
      }

  render(){
  return (
    
    <button className="card__content__container">
      <Link className="link" to={`/product/${this.props.item.id}`} >
        <div className="card__img__container"><img src={this.props.item.gallery[0]} alt="img" className="card__img" /></div>
        <p>{this.props.item.name}</p>
        <p className="price__txt">{this.props.item.prices.find(elem => elem.currency === this.props.currency).amount}</p>
        </ Link>
    </button>
  );}
}

const mapStateToProps = state => {
  return{
    currency: state.shop.currency,
  }
}

export default connect(mapStateToProps)(Card);
