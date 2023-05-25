import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faShop, faUser, faClipboardUser, faBlog, faTruck } from '@fortawesome/free-solid-svg-icons';
import style from './Sidebar.module.scss';
import { Routes, Route, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <Link to="/admin/product" className={cx('element')}>
                <div className={cx('wrap')}>
                    <div className={cx('logo')}>
                        <FontAwesomeIcon icon={faBox} />
                    </div>
                    <div className={cx('desc')}>Danh mục sản phẩm</div>
                </div>
            </Link>
            <Link to="/admin/checkout" className={cx('element')}>
                <div className={cx('wrap')}>
                    <div className={cx('logo')}>
                        <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <div className={cx('desc')}>Danh mục đơn hàng</div>
                </div>
            </Link>
            <Link to="/admin/account" className={cx('element')}>
                <div className={cx('wrap')}>
                    <div className={cx('logo')}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className={cx('desc')}>Danh mục tài khoản</div>
                </div>
            </Link>
            <Link to="/admin/staff" className={cx('element')}>
                <div className={cx('wrap')}>
                    <div className={cx('logo')}>
                        <FontAwesomeIcon icon={faClipboardUser} />
                    </div>
                    <div className={cx('desc')}>Danh mục nhân viên</div>
                </div>
            </Link>
            <Link to="/admin/blog" className={cx('element')}>
                <div className={cx('wrap')}>
                    <div className={cx('logo')}>
                        <FontAwesomeIcon icon={faBlog} />
                    </div>
                    <div className={cx('desc')}>Danh mục bài viết</div>
                </div>
            </Link>
        </div>
    );
}

export default Sidebar;
