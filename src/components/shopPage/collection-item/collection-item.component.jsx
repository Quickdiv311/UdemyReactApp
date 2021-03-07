import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../../redux/user/user.selectors';
import {addItem} from '../../../redux/cart/cart.actions';
import './collection-item.styles.scss';
import Button from '../../common/button/button.component';

const CollectionItem = ({item, addItem, user}) => {
   
    const {name, price, imageUrl} = item;
     
    return(
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{name.toUpperCase()}</span>
            <span className="price">${price}</span>
        </div>
        {
            user ?
        (<Button inverted onClick={() => addItem(item)}>ADD TO CART</Button>)
        :
        null
        }
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem);