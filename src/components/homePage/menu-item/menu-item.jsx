import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.scss';
import {connect} from 'react-redux';
import {selectCurrentUser} from '../../../redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match, user}) => (
    <div className={`${size} menu-item`} onClick={() => {user ? history.push(`${match.url}${linkUrl}`): history.push('/')}}>
       <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}/>
       <div className="content">
           <h1 className="title">{title.toUpperCase()}</h1>
           <span className="subtile">SHOP NOW</span>
       </div>
    </div>
)

const mapStateToProps =  createStructuredSelector({
    user: selectCurrentUser,
  })

export default withRouter(connect(mapStateToProps)(MenuItem));