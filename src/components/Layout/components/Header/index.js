import style from './Header.module.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames/bind';
import logo from '~/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { faCartShopping, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style);

function Header() {
    return (
        <>
            <div className={cx('ship')}>
                <div className={cx('wrapper')}>
                    <div className={cx('ship-text')}>Chuyển phát nhanh quốc tế MIỄN PHÍ + trả hàng DỄ DÀNG</div>
                    <div className={cx('')}></div>
                </div>
            </div>
            <header className={cx('header')}>
                <div className={cx('wrapper')}>
                    <div className={cx('logo')}>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className={cx('menu')}>
                        <Link className={cx('menu-link', 'active')} to="/">
                            <div className={cx('title')}>Trang chủ</div>
                        </Link>

                        <Link className={cx('menu-link')} to="/">
                            <div className={cx('title')}>Cửa hàng</div>
                        </Link>
                        <Link className={cx('menu-link')} to="/">
                            <div className={cx('title')}>Dịch vụ</div>
                        </Link>
                        <Link className={cx('menu-link')} to="/">
                            <div className={cx('title')}>Tin tức</div>
                        </Link>
                        <Link className={cx('menu-link')} to="/">
                            <div className={cx('title')}>Liên hệ</div>
                        </Link>
                    </div>
                    <div className={cx('action')}>
                        <Link to="/">
                            <div className={cx('search')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </Link>
                        <Link to="/">
                            <div className={cx('user')}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </Link>
                        <Link className={cx()} to="/">
                            <div className={cx('wrap')}>
                                <div className={cx('heart')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <span className={cx('count')}>1</span>
                            </div>
                        </Link>
                        <Link to="/" className={cx('link-cart')}>
                            <div className={cx('wrap')}>
                                <div className={cx('cart')}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </div>
                                <span className={cx('count')}>0</span>
                            </div>
                            <span className={cx('total')}>0 VND</span>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
