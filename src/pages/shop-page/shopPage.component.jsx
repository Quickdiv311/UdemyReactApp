import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsPage from '../CollectionsPage/collections.component';
import CollectionView from '../../components/shopPage/collection-view/collection-view.component';

const ShopPage = ({match}) => (
            <div className="shop-page">
               <Route exact path={`${match.path}`} component={CollectionView}/>
               <Route path={`${match.path}/:collectionId`} component={CollectionsPage}/>
            </div>)


export default ShopPage;