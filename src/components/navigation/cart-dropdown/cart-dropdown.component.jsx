import React from 'react';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../../redux/cart/cart.selectors';
import Button from '../../common/button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({items, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            { 
                items.map(item => 
                    (<CartItem key={item.id} item={item}/>))
            }
            </div>
        <Button onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }
    }>GO TO CHECKOUT</Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    items: selectCartItems
}) 


export default withRouter(connect(mapStateToProps)(CartDropdown));