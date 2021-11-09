import React from 'react';
import {Dropdown} from 'react-bootstrap';

class Navigation extends React.Component {
  render(){
  return (
    <div className="nav__container">
        <ul className="nav__list">
            <li className=" list__item nav__item__selected">WOMEN</li>
            <li className=" list__item">MEN</li>
            <li className=" list__item">KIDS</li>
        </ul>

        <img src="/logo.svg" alt="Logo"/>

        <div className="drop__container">
            <Dropdown>
                <Dropdown.Toggle className="dropdown" variant="info">
                $
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">EUR</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">EGP</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown>
                <Dropdown.Toggle className="dropdown" variant="info">
                    <img src="/Cart.svg" alt="Cart" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">EUR</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">EGP</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
  );}
}

export default Navigation;
