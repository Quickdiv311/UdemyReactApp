import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';
import './collections.styles.scss'
import CollectionItem from '../../components/shopPage/collection-item/collection-item.component';

const CollectionsPage = ({collection}) => {
    
    const {title, items} = collection;

    return(
    <div className="collections-page">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="items">
            {
                items.map(item => (<CollectionItem key={item.id} item={item}/>))
            }
        </div>
    </div>
)}

const mapStateToProps = (state, collectionProps) => ({
    collection: selectCollection(collectionProps.match.params.collectionId)(state)
}) 

export default connect(mapStateToProps)(CollectionsPage);