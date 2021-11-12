import React from 'react';
import { connect } from 'react-redux';
import {adjustQty} from '../redux/shopping/shoppingActions';


class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state ={size: ""};
      }
      

      componentDidMount(){
        this.setState({size: this.props.size});
      }

  render(){
  return (
    <div className="cart__item__container">
        {console.log(this.props.size)}
        <div className="grow">
            <h5>{this.props.item.name}</h5>
            <p>{this.props.item.brand}</p>
            <h5>{this.props.item.prices ?this.props.item.prices.find(item => item.currency === this.props.currency).amount* this.props.qty:null}</h5>
            <ul className="sizing">
            <button className="qty__buttons" onClick={()=> this.setState({size: "S"})}><li className={this.state.size === "S"? "size__btn__selected": ""}>S</li></button>
                <button className="qty__buttons" onClick={()=> this.setState({size: "M"})}><li className={this.state.size === "M"? "size__btn__selected": ""}>M</li></button>
                <button className="qty__buttons" onClick={()=> this.setState({size: "L"})}><li className={this.state.size === "L"? "size__btn__selected": ""}>L</li></button>
                <button className="qty__buttons" onClick={()=> this.setState({size: "XL"})}><li className={this.state.size === "XL"? "size__btn__selected": ""}>XL</li></button>
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
