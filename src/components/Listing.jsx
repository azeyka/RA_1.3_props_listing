import React from 'react'
import PropTypes from 'prop-types'


function Listing(props) {
    const {items} = props

    return (
        <div className="item-list">
            {items.map(item => 
                (item.state === 'active' 
                && <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} alt={`${item.listing_id}_img`}/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{cutTitle(item.title)}</p>
                        <p className="item-price">{formatPrice(item.currency_code, item.price)}</p>
                        <p className={setQuantityClass(item.quantity)}>{item.quantity} left</p>
                    </div>
                </div>)
            )}       
        </div>
    )
}

function cutTitle(title) {
    if (title.length >= 50) {
        title = `${title.slice(0,50)}...`
    };

    return title
}

function formatPrice(code, price) {
    if (code === 'USD') {
        return `$${price}`;
    } else if (code === 'EUR') {
        return `€${price}`;
    };
    
    return `${price} ${code}`;

}

function setQuantityClass(quantity) {
    if (quantity <= 10) {
        return 'item-quantity level-low';
    } else if (quantity > 10 && quantity <= 20) {
        return 'item-quantity level-medium';
    };

    return 'item-quantity level-high'
}

Listing.propTypes = {
    items: PropTypes.array
}

export default Listing

