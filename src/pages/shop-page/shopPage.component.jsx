import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsPage from '../CollectionsPage/collections.component';
import CollectionView from '../../components/shopPage/collection-view/collection-view.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsFetching} from '../../redux/shop/shop.selectors';
import Spin from '../../components/common/spin/spin.component';
import {startFetchinCollectionsAsync} from '../../redux/shop/shop.action';

const ViewSpin = Spin(CollectionView);
const CollectionSpin = Spin(CollectionsPage);

class ShopPage extends React.Component  
{
  
  componentDidMount()
  {
       const {putData} = this.props;
       putData();
  }

  render()
  {
     const {match, loading} = this.props;

     return(
      <div className="shop-page">
         <Route exact path={`${match.path}`} render={props => (<ViewSpin isLoading={loading} {...props}/>)}/>
         <Route path={`${match.path}/:collectionId`} render={props => (<CollectionSpin isLoading={loading} {...props}/>)}/>
      </div>)
  }
}

const mapStateToProps = createStructuredSelector({
   loading: selectIsFetching
})

const mapDispatchToProps = dispatch => ({
   putData: () => dispatch(startFetchinCollectionsAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);