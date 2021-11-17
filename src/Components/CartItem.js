import React from 'react';
import { connect } from 'react-redux';
import {adjustQty} from '../redux/shopping/shoppingActions';


class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state ={attributes: {}, qty: 0, imagesLength: this.props.item.gallery.length, currentImage:0};
      }
      
      componentWillReceiveProps(prevProps){
        if (prevProps.item !== this.props.item){
        this.setState({attributes: this.props.item.attributes, qty: this.props.item.qty, imagesLength: this.props.item.gallery.length});
    }}

  render(){
  return (
    <div className="cart__item__container">
        
        <div className="grow">
            <h5>{this.props.item.name}</h5>
            <p>{this.props.item.brand}</p>
            <h5>{this.props.item.prices ? 
            this.props.item.prices.find(elem => elem.currency === this.props.currency.currency).amount:null} 
            {this.props.currency.symbol}</h5>

            {this.props.item?  this.props.product.attributes.map((elem, index) =>
            <div key={index}>
                <p>{elem.name}</p>
                <ul className="sizing">
                    {elem.items.map((item, index) => <button key={index} className="qty__buttons" onClick={()=> 
                        this.setState({attributes: {...this.props.item.attributes, [elem.name]: item.displayValue}})}>
                            {console.log(this.props.product)}
                            <li className={this.props.item.attributes[elem.name] === item.displayValue? "size__btn__selected": ""}>
                                {item.value}
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

        <div className="btncont">
            <button className="btnleft" onClick={()=> 
                this.state.currentImage > 0 ? 
                this.setState({currentImage: this.state.currentImage-1}):null}>{"<"}</button>
            <img src={this.props.item.gallery[this.state.currentImage]} alt="img"/>
            <button className="btnright" onClick={()=> 
                this.state.currentImage < this.state.imagesLength-1 ?
                this.setState({currentImage: this.state.currentImage+1}):null}>{">"}</button>
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
