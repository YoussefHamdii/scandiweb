import React from 'react';
import { connect } from 'react-redux';
import {adjustQty} from '../redux/shopping/shoppingActions';


class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state ={attributes: this.props.item.attributes, qty: this.props.item.qty};
      }
      

  render(){
  return (
    <div className="cart__item__container">
        {console.log(this.props.product)}
        <div className="grow">
            <h5>{this.props.item.name}</h5>
            <p>{this.props.item.brand}</p>
            <h5>{this.props.item.prices ? 
            this.props.item.prices.find(elem => elem.currency === this.props.currency.currency).amount:null} 
            {this.props.currency.symbol}</h5>

            {this.props.item?  this.props.product.attributes.map(elem =>
            <div>
                <p>{elem.name}</p>
                <ul className="sizing">
                    {elem.items.map(item => <button className="qty__buttons" onClick={()=> 
                        this.setState({attributes: {...this.props.item.attributes, [elem.name]: item.displayValue}})}>
                            <li className={this.props.item.attributes[elem.name] === item.displayValue? "size__btn__selected": ""}>
                                {item.displayValue}
                            </li></button>)}
                </ul>
            </div>):null}
            
        </div>

        <div>
        <ul className="qty">
                <button className="qty__buttons" onClick={()=> this.props.adjustQty(this.props.item, this.props.item.qty+1)}>
                    <li>+</li>
                </button>
                <li className="number">{this.props.item? this.props.item.qty: null}</li>
                <button className="qty__buttons" onClick={()=> this.props.adjustQty(this.props.item, this.props.item.qty-1)}>
                    <li>-</li>
                </button>
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
