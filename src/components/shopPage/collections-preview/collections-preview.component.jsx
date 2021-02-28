import React from 'react';
import './collections-preview.styles.scss';
import {withRouter} from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import {connect} from 'react-redux';
import {selectCurrentUser} from '../../../redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';

const CollectionPreview = ({title,items, history, match, user}) => (
    <div className="collection-preview" >
        <h1 className="title" onClick={() => {user ? history.push(`${match.url}/${title.toLowerCase()}`) : history.push('/shop')}}>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,idx) => idx < 4)
                .map(item => (
                     <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)


const mapStateToProps =  createStructuredSelector({
    user: selectCurrentUser,
  })

export default withRouter(connect(mapStateToProps)(CollectionPreview));

