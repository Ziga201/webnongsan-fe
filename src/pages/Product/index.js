import style from './Product.module.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Product() {
    return (
        <>
            <div className={cx('banner')}>
                <div className={cx('wrapper')}>
                    <div className={cx('heading')}>Sản phẩm</div>
                    <div className={cx('path')}>
                        <Link to="/" className={cx('link')}>
                            Trang chủ
                        </Link>
                        <FontAwesomeIcon style={{ margin: '0 5px' }} icon={faAngleRight} />
                        <span className={cx('page')}>Sản phẩm</span>
                    </div>
                </div>
            </div>

            <div className={cx('content')}>
                <div className={cx('wrapper')}>
                    <div className={cx('text-editor')}>Discover</div>

                    <div className={cx('search')}>
                        <input type="text" className={cx('search-input')} placeholder="Nhập từ khoá..." />
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('product-block', 'col-md-3')}>
                            <div className={cx('product-img')}>
                                <img
                                    src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/1-450x420.jpg"
                                    alt="product"
                                />
                            </div>
                            <div className={cx('product-name')}>Cam Xoàn</div>
                            <div className={cx('product-price')}>200.000 VND</div>
                            <div className={cx('product-add')}>
                                Thêm giỏ hàng
                                <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                            </div>
                        </div>
                        <div className={cx('product-block', 'col-md-3')}>
                            <div className={cx('product-img')}>
                                <img
                                    src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/1-450x420.jpg"
                                    alt="product"
                                />
                            </div>
                            <div className={cx('product-name')}>Cam Xoàn</div>
                            <div className={cx('product-price')}>200.000 VND</div>
                            <div className={cx('product-add')}>
                                Thêm giỏ hàng
                                <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                            </div>
                        </div>
                        <div className={cx('product-block', 'col-md-3')}>
                            <div className={cx('product-img')}>
                                <img
                                    src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/1-450x420.jpg"
                                    alt="product"
                                />
                            </div>
                            <div className={cx('product-name')}>Cam Xoàn</div>
                            <div className={cx('product-price')}>200.000 VND</div>
                            <div className={cx('product-add')}>
                                Thêm giỏ hàng
                                <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                            </div>
                        </div>
                        <div className={cx('product-block', 'col-md-3')}>
                            <div className={cx('product-img')}>
                                <img
                                    src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/1-450x420.jpg"
                                    alt="product"
                                />
                            </div>
                            <div className={cx('product-name')}>Cam Xoàn</div>
                            <div className={cx('product-price')}>200.000 VND</div>
                            <div className={cx('product-add')}>
                                Thêm giỏ hàng
                                <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                            </div>
                        </div>
                        <div className={cx('product-block', 'col-md-3')}>
                            <div className={cx('product-img')}>
                                <img
                                    src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/1-450x420.jpg"
                                    alt="product"
                                />
                            </div>
                            <div className={cx('product-name')}>Cam Xoàn</div>
                            <div className={cx('product-price')}>200.000 VND</div>
                            <div className={cx('product-add')}>
                                Thêm giỏ hàng
                                <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                            </div>
                        </div>
                        <div className={cx('product-block', 'col-md-3')}>
                            <div className={cx('product-img')}>
                                <img
                                    src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/1-450x420.jpg"
                                    alt="product"
                                />
                            </div>
                            <div className={cx('product-name')}>Cam Xoàn</div>
                            <div className={cx('product-price')}>200.000 VND</div>
                            <div className={cx('product-add')}>
                                Thêm giỏ hàng
                                <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                            </div>
                        </div>
                        <div className={cx('product-block', 'col-md-3')}>
                            <div className={cx('product-img')}>
                                <img
                                    src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/1-450x420.jpg"
                                    alt="product"
                                />
                            </div>
                            <div className={cx('product-name')}>Cam Xoàn</div>
                            <div className={cx('product-price')}>200.000 VND</div>
                            <div className={cx('product-add')}>
                                Thêm giỏ hàng
                                <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                            </div>
                        </div>
                        <div className={cx('product-block', 'col-md-3')}>
                            <div className={cx('product-img')}>
                                <img
                                    src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/1-450x420.jpg"
                                    alt="product"
                                />
                            </div>
                            <div className={cx('product-name')}>Cam Xoàn</div>
                            <div className={cx('product-price')}>200.000 VND</div>
                            <div className={cx('product-add')}>
                                Thêm giỏ hàng
                                <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                            </div>
                        </div>
                        <div className={cx('product-block', 'col-md-3')}>
                            <div className={cx('product-img')}>
                                <img
                                    src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/1-450x420.jpg"
                                    alt="product"
                                />
                            </div>
                            <div className={cx('product-name')}>Cam Xoàn</div>
                            <div className={cx('product-price')}>200.000 VND</div>
                            <div className={cx('product-add')}>
                                Thêm giỏ hàng
                                <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
