import {selectIsFetching} from '../../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Spin from '../../common/spin/spin.component';
import CollectionView from '../collection-view/collection-view.component'

const mapStatetoProps = createStructuredSelector({
    isLoading: selectIsFetching
})

const CollectionViewContainer = connect(mapStatetoProps)(Spin(CollectionView))

export default CollectionViewContainer;