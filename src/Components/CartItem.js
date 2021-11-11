import React from 'react';
import { connect } from 'react-redux';
import {adjustQty} from '../redux/shopping/shoppingActions';


class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state ={};
      }
      

  render(){
  return (
    <div className="cart__item__container">
        <div className="grow">
            <h5>{this.props.item.name}</h5>
            <p>{this.props.item.brand}</p>
            <h5>50$</h5>
            <ul className="sizing">
                <li>M</li>
                <li>L</li>
            </ul>
        </div>

        <div>
        <ul className="qty">
                <button className="qty__buttons" onClick={()=> this.props.adjustQty(this.props.item.id, this.props.qty+1)}><li>+</li></button>
                <li className="number">{this.props.qty}</li>
                <button className="qty__buttons" onClick={()=> this.props.adjustQty(this.props.item.id, this.props.qty-1)}><li>-</li></button>
            </ul>
        </div>

        <div>
            <img src={this.props.item.gallery[0]} alt="img"/>
        </div>
    </div>
  );}
}

const mapDispatchToProps = dispatch => {
    return {
        adjustQty: (id, qty) => dispatch(adjustQty(id, qty)),
    }
}

export default connect(null, mapDispatchToProps)(CartItem);
