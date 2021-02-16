import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../../redux/cart/cart.actions';
import {cartCount} from '../../../redux/cart/cart.selectors';
import {ReactComponent as ShoppingIcon} from '../../../assets/shopping-bag.svg';
import './cart.styles.scss';

const Cart = ({clickCart, count}) => (
    <div className="cart-icon" onClick={count ?  clickCart : null}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{count}</span>
    </div>)

const mapStateToProps = createStructuredSelector({
    count: cartCount
})

const mapDispatchToProps = dispatch => ({
    clickCart: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps  , mapDispatchToProps)(Cart);