import * as actionTypes from "./shoppingTypes";


export const addToCart = (item, attributes) =>{
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            ...item,
            attributes: attributes
        }
    };
};

export const adjustQty = (item, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            ...item,
            qty: value
        }
    };
};

export const addProducts = (products) =>{
    return {
        type: actionTypes.ADD_PRODUCTS,
        payload: products
    };
};

export const changeCurrency = (currency, symbol) =>{
    return{
        type: actionTypes.CHANGE_CURRENCY,
        payload: {
            currency: currency,
            symbol: symbol
        }
    };
};

export const changeCategory = (category) => {
    return{
        type: actionTypes.CHANGE_CATEGORY,
        payload: category
    };
};