import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectHidden} from '../../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../../redux/user/user.selectors';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../../assets/crown.svg';
import './header.styles.scss';
import Cart from '../cart/cart.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {signOutStart} from '../../../redux/user/user.actions';

const Header = ({currentUser, hidden, signOut}) => (
    <div className="header">
         <Link className="logo-container" to='/'>
             <Logo className='logo'/>
         </Link>
         <div className="options">
              <Cart/>
              <Link className="option" to='/shop'>SHOP</Link>
              <Link to="/" className="option">CONTACT</Link>
              {
                  currentUser?
                  <div className="option" onClick={signOut}>SIGN OUT</div>
                  : <Link to="/sign" className="option">SIGN IN</Link>
              }
         </div>
         {
             hidden?
            null:
         <CartDropdown/>
         }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);