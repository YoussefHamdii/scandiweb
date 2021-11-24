import React from 'react';
import {Dropdown, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { changeCategory, changeCurrency } from '../redux/shopping/shoppingActions';
import client from "../Apiurl";
import {gql} from '@apollo/client';
import CartOverlay from './CartOverlay';

const testQuery = gql`
  query Query {
    categories{
        name
      }
  }
`;

const currenciesQuery = gql`
  query Query {
    currencies
  }
`;

class Navigation extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.state ={selected: 0, toggleCart: false, categories: [], currencySymbols: ["$", "£", "$", "₽", "¥"], currencies:[]};
      }

      componentDidMount(){
        client.query({
            query: testQuery
        }).then(res => {this.setState({categories: res.data.categories})})
        .catch(e => console.log(e));

        client.query({
            query: currenciesQuery
        }).then(res => {this.setState({currencies: res.data.currencies})})
        .catch(e => console.log(e));
      }

      handleToggleChange(toggle){
            this.setState({toggleCart: toggle});
      }

      countItems(){
        let x = 0;
        this.props.cart.map((item, index) => (x= x+item.qty))
        return x;
      }

  render(){
  return (
    <div className="nav__container">
        <ul className="nav__list">
            {this.state.categories ? this.state.categories.map((category, index) => 
            <Link to="/">
                <button key={index} className="qty__buttons" onClick={()=> 
                    {this.props.onCatChange(category.name); this.setState({selected: index})}}>
                <li className={this.state.selected === index ?"list__item nav__item__selected":"list__item"}>{category.name}</li>
                </button>
            </Link>):null}
        </ul>

        <Link to="/"><img className="logo" src="/logo.svg" alt="Logo" /></Link>

        <div className="drop__container">
            <Dropdown>
                <Dropdown.Toggle className="dropdown" variant="info">
                {this.props.currency.symbol}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {this.state.currencies.map((currency, index) => 
                        <Dropdown.Item key={index} onClick={() => 
                            this.props.changeCurrency(currency, this.state.currencySymbols[index])}>
                                {this.state.currencySymbols[index]} {currency}
                        </Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>

            <button className="qty__buttons" onClick={() => this.setState({toggleCart: true})}>    
                <div className="notification">
                    <span>{this.countItems()}</span>
                </div>
                <img className="cart__logo" src="/Cart.svg" alt="Cart" />
            </button>
            
            <Modal show={this.state.toggleCart} onHide={()=> this.setState({toggleCart: false})} animation={false} className="modal">
                {this.state.toggleCart ? 
                <div className="minicart">
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

const mapStateToProps = state => {
    return{
        currency: state.shop.currency,
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
