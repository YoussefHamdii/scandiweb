import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state ={};
      }

  render(){
  return (
    <div className="card__content__container">
        {console.log(this.props.item)}
        <img src={this.props.item.gallery[0]} alt="img" className="card__img" />
        <p>{this.props.item.name}</p>
        <p className="price__txt">{this.props.item.prices[0].amount}</p>
    </div>
  );}
}

export default Card;
