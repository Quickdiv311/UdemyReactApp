import CartType from './cart.types';

export const toggleCartHidden = () => ({
    type: CartType.ToggleHiddenState
})

export const addItem = item => ({
    type: CartType.AddItem,
    payload: item
})

export const removeItem = item => ({
    type: CartType.RemoveItem,
    payload: item
})

export const reduceQuantity = item => ({
    type: CartType.ReduceQuantity,
    payload: item
})