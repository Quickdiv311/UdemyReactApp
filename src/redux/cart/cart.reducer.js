import CartType from './cart.types';
import {addItemToCart, reduceCartItemQuantity} from './cart.utils';

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=initialState, action) => {
    switch(action.type)
    {
        case CartType.ToggleHiddenState:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartType.AddItem: 
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CartType.RemoveItem:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }

        case CartType.ReduceQuantity: 
             return {
                ...state,
                cartItems: reduceCartItemQuantity(state.cartItems, action.payload)
             }

         default: 
            return state
    }
}

export default cartReducer;