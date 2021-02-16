import React from 'react';
import {connect} from 'react-redux';
import {selectCollections} from '../../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collections-preview/collections-preview.component';

const CollectionView = ({collections}) => (
    <div className="collection-view">
        {
           collections.map(({id, ...otherProps}) => (
              <CollectionPreview key={id} {...otherProps}/>
           )) 
        }
    </div>)

const mapStateToProps = createStructuredSelector({
collections: selectCollections
})

export default connect(mapStateToProps)(CollectionView);