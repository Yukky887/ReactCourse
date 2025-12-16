import { NavLink, useNavigate, useSearchParams } from "react-router";
import { useState } from "react";
import "./Header.css";
import logo from '../assets/images/logo-white.png';
import mobileLogo from '../assets/images/mobile-logo-white.png';
import cartIcon from '../assets/images/icons/cart-icon.png';
import searchIcon from '../assets/images/icons/search-icon.png';

type HeaderProps = {
    cart: {
        productId: string,
        quantity: number,
        deliveryOptionId: string;
    }[];
};


export function Header({ cart }: HeaderProps) {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');

    const [searchQuery, setSearchQuery] = useState(search || "");

    const navigate = useNavigate()

    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });

    const updateSearchInput = (event) => {
        setSearchQuery(event.target.value)
    }

    const searchProducts = () => {
        navigate(`/?search=${searchQuery}`);
    };

    return (
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        <img className="logo"
                            src={logo} />
                        <img className="mobile-logo"
                            src={mobileLogo} />
                    </NavLink>
                </div>

                <div className="middle-section">
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={updateSearchInput}
                    />

                    <button
                        className="search-button"
                        onClick={searchProducts}
                    >
                        <img className="search-icon" src={searchIcon} />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src={cartIcon} />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </NavLink>
                </div>
            </div>
        </>
    );
}