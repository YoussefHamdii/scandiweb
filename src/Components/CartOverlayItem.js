import React from 'react';
import { connect } from 'react-redux';
import {adjustQty} from '../redux/shopping/shoppingActions';


class CartOverlayItem extends React.Component {

    constructor(props) {
        super(props);
        this.state ={size: ""};
      }
      

      componentDidMount(){
        this.setState({size: this.props.size});
      }

  render(){
  return (
    <div className="cart__item__container__overlay">
        <div className="grow__overlay">
            <h6>{this.props.item.brand} {this.props.item.name}</h6>
            <h6>{this.props.item.prices ? 
            this.props.item.prices.find(elem => 
            elem.currency === this.props.currency.currency).amount:null} 
            {this.props.currency.symbol}</h6>

            {this.props.item?  this.props.product.attributes.map((elem, index) =>
            <div key={index}>
                <p>{elem.name}</p>
                <ul className="sizing__overlay">
                    {elem.items.map((item, index) => <button key={index} className="qty__buttons" onClick={()=> 
                        this.setState({attributes: {...this.props.item.attributes, [elem.name]: item.displayValue}})}>
                            <li className={this.props.item.attributes[elem.name] === item.displayValue? 
                                "size__btn__selected": ""}>{item.displayValue}
                            </li></button>)}
                </ul>
            </div>):null}
        </div>

        <div>
        <ul className="qty__overlay">
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
            <img className="overlay__image" src={this.props.item.gallery[0]} alt="img"/>
        </div>
    </div>
  );}
}

const mapDispatchToProps = dispatch => {
    return {
        adjustQty: (id, qty) => dispatch(adjustQty(id, qty)),
    }
}

export default connect(null, mapDispatchToProps)(CartOverlayItem);
