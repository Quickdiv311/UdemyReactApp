import {takeLatest,call,put,all} from 'redux-saga/effects'
import ShopType from './shop.types';
import {firestore, pullFromServer} from '../../firebase/firebase.utils';
import {finishFetchingCollections, collectionFetchingError} from './shop.action';

export function* fetchCollectionsAsync() {

    try{
        const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collections = yield call(pullFromServer,snapshot);
    yield put(finishFetchingCollections(collections));
    }
    catch(error)
    {
    yield put(collectionFetchingError(error.message));
    }
    }

export function* startFetchingCollections() {
    yield takeLatest(ShopType.StartFetchingCollections, fetchCollectionsAsync)
}

export function* shopSaga(){
    yield all([call(startFetchingCollections)])
}