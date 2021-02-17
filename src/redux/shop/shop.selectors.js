import {createSelector} from 'reselect'

const mapCollection = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionName => 
    createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === mapCollection[collectionName])
    )