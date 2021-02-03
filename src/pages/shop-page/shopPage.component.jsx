import React from 'react';
import './shopPage.styles.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collections-preview/collections-preview.component';

class ShopPage extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render()
    {
        const {collections} = this.state;

        return(
            <div className="shop-page">
                {
                   collections.map(({id, ...otherProps}) => (
                      <CollectionPreview key={id} {...otherProps}/>
                   )) 
                }
            </div>
        )
    }
}

export default ShopPage;