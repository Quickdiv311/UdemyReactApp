import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {removeItem, addItem, reduceQuantity} from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, removeItem, reduceQuantity, addItem}) => {
    
    const {name, price, quantity, imageUrl} = item;

    return(<div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt={name}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => reduceQuantity(item)}>&#10094;</div>
            <div className="value">{quantity}</div>
            <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
            </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => removeItem(item)}>&#10008;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    reduceQuantity: item => dispatch(reduceQuantity(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);