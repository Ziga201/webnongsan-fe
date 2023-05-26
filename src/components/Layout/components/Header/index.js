import style from './Header.module.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames/bind';
import logo from '~/assets/images/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import {
    faCartShopping,
    faHeart,
    faMagnifyingGlass,
    faSignOut,
    faTruck,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style);

function Header() {
    // const [cartItems, setCartItems] = useState([]);
    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    //     setCartItems(items);
    // }, []);
    // const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0);

    // const quantity = () => {
    //     const items = JSON.parse(localStorage.getItem('cartItems'));
    //     return items.reduce((acc, item) => acc + item.quantity, 0);
    // };

    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems'));
        setCartCount(items.length);
    });
    // console.log(cartCount);

    const signOut = () => {
        localStorage.removeItem('user');
        window.location.href = '/login';
    };

    return (
        <header className={cx('header-wrap')}>
            <div className={cx('ship')}>
                <div className={cx('wrapper')}>
                    <div className={cx('ship-text')}>Chuyển phát nhanh quốc tế MIỄN PHÍ + trả hàng DỄ DÀNG</div>
                    <div className={cx('')}></div>
                </div>
            </div>
            <div className={cx('header')}>
                <div className={cx('wrapper')}>
                    <div className={cx('logo')}>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className={cx('menu')}>
                        <NavLink exact activeclassname="active" className={cx('menu-link')} to="/">
                            <div className={cx('title')}>Trang chủ</div>
                        </NavLink>

                        <NavLink activeclassname="active" className={cx('menu-link')} to="/product">
                            <div className={cx('title')}>Sản phẩm</div>
                        </NavLink>
                        <NavLink activeclassname="active" className={cx('menu-link')} to="/staff">
                            <div className={cx('title')}>Đội ngũ</div>
                        </NavLink>
                        <NavLink activeclassname="active" className={cx('menu-link')} to="/blog">
                            <div className={cx('title')}>Tin tức</div>
                        </NavLink>
                        <NavLink activeclassname="active" className={cx('menu-link')} to="/contact">
                            <div className={cx('title')}>Liên hệ</div>
                        </NavLink>
                    </div>
                    <div className={cx('action')}>
                        <div to="/login" onClick={() => signOut()}>
                            <div className={cx('search')}>
                                <FontAwesomeIcon icon={faSignOut} />
                            </div>
                        </div>
                        <Link to="/login">
                            <div className={cx('user')}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </Link>
                        <Link className={cx()} to="/order">
                            <div className={cx('wrap')}>
                                <div className={cx('heart')}>
                                    <FontAwesomeIcon icon={faTruck} />
                                </div>
                                {/* <span className={cx('count')}>1</span> */}
                            </div>
                        </Link>
                        <Link to="/cart" className={cx('link-cart')}>
                            <div className={cx('wrap')}>
                                <div className={cx('cart')}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </div>
                                <span className={cx('count')}>{cartCount}</span>
                            </div>

                            {/* <span className={cx('total')}>{totalPrice} VND</span> */}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
