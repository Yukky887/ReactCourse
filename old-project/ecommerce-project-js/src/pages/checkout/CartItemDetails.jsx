import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";

export function CartItemDetails({ cartItem, loadCart }) {
    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const [isQuantityUpdating, setIsQuantityUpdating] = useState(false);

    const [quantity, setQuantity] = useState(cartItem.quantity);

    const updateQuantity = async () => {
        setIsQuantityUpdating((state) => {
            return !state;
        });

        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: Number(quantity)
        });

        await loadCart();
    }

    const enterQuantity = (event) => {
        if (event.key === 'Enter') {
            updateQuantity();
        } else if (event.key === 'Escape') {
            setIsQuantityUpdating(false);
            setQuantity(cartItem.quantity);
        }
    }

    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: 
                            {isQuantityUpdating ? (
                                <input 
                                    className="quantity-input"
                                    type="text"
                                    value={quantity}
                                    onChange={(event) => {
                                        setQuantity(event.target.value);
                                    }} 
                                    onKeyDown={enterQuantity}
                                />
                            ) : (
                                <span className="quantity-label">{quantity}</span>
                            )}
                    </span>
                    <span className="update-quantity-link link-primary"
                        onClick={updateQuantity}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}