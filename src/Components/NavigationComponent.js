import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { changeCurrency } from '../redux/shopping/shoppingActions';
import CartOverlay from './CartOverlay';

class Navigation extends React.Component {
    
    constructor(props) {
        super(props);
        this.state ={selected: 0, toggleCart: false};
      }

  render(){
  return (
    <div className="nav__container">
        <ul className="nav__list">
            <button className="qty__buttons" onClick={()=> this.setState({selected: 0})}><li className={this.state.selected === 0 ?"list__item nav__item__selected":"list__item"}>WOMEN</li></button>
            <button className="qty__buttons" onClick={()=> this.setState({selected: 1})}><li className={this.state.selected === 1 ?"list__item nav__item__selected":"list__item"}>MEN</li></button>
            <button className="qty__buttons" onClick={()=> this.setState({selected: 2})}><li className={this.state.selected === 2 ?"list__item nav__item__selected":"list__item"}>KIDS</li></button>
        </ul>

        <Link to="/"><img className="logo" src="/logo.svg" alt="Logo" /></Link>

        <div className="drop__container">
            <Dropdown>
                <Dropdown.Toggle className="dropdown" variant="info">
                $
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.props.changeCurrency("USD")}>$ USD</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.props.changeCurrency("GBP")}>£ GBP</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.props.changeCurrency("AUD")}>$ AUD</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.props.changeCurrency("RUB")}>₽ RUB</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.props.changeCurrency("JPY")}>¥ JPY</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown>

                <button className="qty__buttons" onClick={() => this.setState({toggleCart: !this.state.toggleCart})}>    
                    <img className="cart__logo" src="/Cart.svg" alt="Cart" />
                </button>

                {this.state.toggleCart ? <div className="minicart">
                    <CartOverlay />
                </div>: null}
            </Dropdown>
        </div>
    </div>
  );}
}

const mapDispatchToProps = dispatch => {
    return{
        changeCurrency: (currency) => dispatch(changeCurrency(currency))
    }
}

export default connect(null, mapDispatchToProps)(Navigation);
