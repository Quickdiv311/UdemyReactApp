import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsPage from '../CollectionsPage/collections.component';
import CollectionView from '../../components/shopPage/collection-view/collection-view.component';
import { firestore, pullFromServer } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.action';

class ShopPage extends React.Component  
{
  unsub = null;

  componentDidMount()
  {
    const {putData} = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsub = collectionRef.onSnapshot(async snapShot => {
       const collections = pullFromServer(snapShot);
       putData(collections);
    })
  }

  render()
  {
     const {match} = this.props;

     return(
      <div className="shop-page">
         <Route exact path={`${match.path}`} component={CollectionView}/>
         <Route path={`${match.path}/:collectionId`} component={CollectionsPage}/>
      </div>)
  }
}

const mapDispatchToProps = dispatch => ({
   putData: collections => dispatch(updateCollections(collections))
})

export default connect(null,mapDispatchToProps)(ShopPage);