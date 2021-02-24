import ShopType from './shop.types';

export const startFetchinCollections = () => ({
    type: ShopType.StartFetchingCollections,
})

export const finishFetchingCollections = collections => ({
    type: ShopType.FinishFetchingCollections,
    payload: collections
})

export const collectionFetchingError= errorMessage => ({
    type: ShopType.CollectionFetchingError,
    payload: errorMessage
})




// export const startFetchinCollectionsAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(startFetchinCollections())
//         collectionRef.get().then(snapShot => {
//            const collections = pullFromServer(snapShot);
//            dispatch(finishFetchinCollections(collections))
//         }).catch(error => dispatch(collectionFetchingError(error.message)))
//         }
// }