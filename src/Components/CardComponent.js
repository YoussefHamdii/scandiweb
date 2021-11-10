import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state ={};
      }

  render(){
  return (
    <button className="card__content__container">
      <Link className="link" to={`/product/${this.props.item.id}`} >
        <img src={this.props.item.gallery[0]} alt="img" className="card__img" />
        <p>{this.props.item.name}</p>
        <p className="price__txt">{this.props.item.prices[0].amount}</p>
        </ Link>
    </button>
  );}
}

export default Card;
