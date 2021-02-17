import React from 'react';
import './checkoutPage.styles.scss';
import {connect} from 'react-redux';
import {selectCartItems, cartTotal} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/CheckoutPage/checkout-item.component';
import StripeCheckoutButton from '../../components/payments/stripe-button.component';

const CheckoutPage = ({items, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Qunatity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
                items.map(item => 
                      <CheckoutItem key={item.id} item={item}/>
                    )
            }
            <div className="total">
                <span>Total: ${total}</span>
            </div>
            <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: cartTotal
})

export default connect(mapStateToProps)(CheckoutPage);