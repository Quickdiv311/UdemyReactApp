import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsPageContainer from '../CollectionsPage/collections.component';
import CollectionViewContainer from '../../components/shopPage/collection-view/collection-view.component';
import {connect} from 'react-redux';
import {startFetchinCollections} from '../../redux/shop/shop.action';

class ShopPage extends React.Component  
{
  
  componentDidMount()
  {
       const {putData} = this.props;
       putData();
  }

  render()
  {
     const {match} = this.props;

     return(
      <div className="shop-page">
         <Route exact path={`${match.path}`} component={CollectionViewContainer}/>
         <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer}/>
      </div>)
  }
}

const mapDispatchToProps = dispatch => ({
   putData: () => dispatch(startFetchinCollections())
})

export default connect(null,mapDispatchToProps)(ShopPage);