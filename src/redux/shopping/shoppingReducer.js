import * as actionTypes from './shoppingTypes';

const INITIAL_STATE = {
    products: [],
    cart: [],
    currency: {currency: "USD", symbol: "$"},
    category: "clothes"
}

const shopReducer = (state = INITIAL_STATE, {type, payload}) =>{

    switch(type){
        case actionTypes.ADD_TO_CART:
            const inCart = state.cart.find((item)=> item.id === payload.id? true:false);
            return{...state, cart: inCart? state.cart.map((item) => item.id === payload.id? {...item, qty:item.qty+1}:item) : [...state.cart, {...payload, qty:1}]};
        case actionTypes.ADJUST_QTY:
            if (payload.qty === 0) return {...state, cart: state.cart.filter((elem) => elem.id !== payload.id)};
            else return{...state, cart: state.cart.map((item) => item.id === payload.id? {...item, qty:payload.qty}:item) };
        case actionTypes.ADD_PRODUCTS:
            return {...state, products: payload}
        case actionTypes.CHANGE_CURRENCY:
            return{...state, currency: payload}
        case actionTypes.CHANGE_CATEGORY:
            return {...state, category: payload}
        default:
            return state;
    }

}

export default shopReducer;