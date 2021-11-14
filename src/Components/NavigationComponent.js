import React from 'react';
import {Dropdown, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { changeCategory, changeCurrency } from '../redux/shopping/shoppingActions';
import CartOverlay from './CartOverlay';


class Navigation extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.state ={selected: 0, toggleCart: false};
      }

      handleToggleChange(toggle){
            this.setState({toggleCart: toggle});
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
                    <Dropdown.Item onClick={() => this.props.changeCurrency("USD", "$")}>$ USD</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.props.changeCurrency("GBP", "£")}>£ GBP</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.props.changeCurrency("AUD", "$")}>$ AUD</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.props.changeCurrency("RUB", "₽")}>₽ RUB</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.props.changeCurrency("JPY", "¥")}>¥ JPY</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <button className="qty__buttons" onClick={() => this.setState({toggleCart: true})}>    
                    <img className="cart__logo" src="/Cart.svg" alt="Cart" />
                </button>
            
            <Modal show={this.state.toggleCart} onHide={()=> this.setState({toggleCart: false})} animation={false} className="modal">
                {this.state.toggleCart ? <div className="minicart">
                    <CartOverlay toggleHandler={this.handleToggleChange}/>
                </div>: null}
            </Modal>
        </div>
    </div>
  );}
}

const mapDispatchToProps = dispatch => {
    return{
        changeCurrency: (currency, symbol) => dispatch(changeCurrency(currency, symbol)),
        changeCategory: (category) => dispatch(changeCategory(category))
    }
}

export default connect(null, mapDispatchToProps)(Navigation);
