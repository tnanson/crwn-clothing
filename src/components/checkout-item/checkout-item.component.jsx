import React from 'react';
import {connect} from 'react-redux';
import {clearItem, addItem, removeItem} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {

    const {id, quantity, price, imageUrl, name} = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'></img>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(id)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(id)}>&#10005;</div>
        </div>
    )
};

export const mapDispatchToProps = dispatch => ({
    clearItem: id => dispatch(clearItem(id)),
    addItem: item => dispatch(addItem(item)),
    removeItem: id => dispatch(removeItem(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);