import {selectIsFetching} from '../../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Spin from '../../common/spin/spin.component';
import CollectionsPage from '../CollectionsPage/collections.component';

const mapStatetoProps = createStructuredSelector({
    isLoading: selectIsFetching
})

const CollectionsPageContainer = connect(mapStatetoProps)(Spin(CollectionsPage))

export default CollectionsPageContainer;