import ShopType from './shop.types';

const initialState = {
    collections: null,
    isFetching: false,
    errorMes: undefined
}

const shopReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ShopType.StartFetchingCollections:
            return {
               ...state,
               isFetching: true,
            }

            case ShopType.FinishFetchingCollections:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        case ShopType.CollectionFetchingError:
            return{
                ...state,
                isFetching: false,
                errorMes: action.payload
            }

        default: 
         return state
    }
}

export default shopReducer;