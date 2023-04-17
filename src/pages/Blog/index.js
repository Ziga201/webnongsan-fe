import style from './Blog.module.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCalendarDays, faComments, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Blog() {
    return (
        <>
            <div className={cx('banner')}>
                <div className={cx('wrapper')}>
                    <div className={cx('heading')}>Tin tức</div>
                    <div className={cx('path')}>
                        <Link to="/" className={cx('link')}>
                            Trang chủ
                        </Link>
                        <FontAwesomeIcon style={{ margin: '0 5px' }} icon={faAngleRight} />
                        <span className={cx('page')}>Tin tức</span>
                    </div>
                </div>
            </div>

            <div className={cx('content')}>
                <div className={cx('wrapper')}>
                    <div className={cx('row')}>
                        <div className={cx('item', 'col-md-4')}>
                            <Link to="/">
                                <div className={cx('image')}>
                                    <img
                                        src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2019/12/blog-6-410x250.jpg"
                                        alt="blog"
                                    />
                                </div>
                            </Link>
                            <div className={cx('info')}>
                                <FontAwesomeIcon icon={faCalendarDays} /> 10-07-2023 / <FontAwesomeIcon icon={faUser} />{' '}
                                bởi admin / <FontAwesomeIcon icon={faComments} /> 6
                            </div>
                            <Link to="/" className={cx('title')}>
                                5 Lý Do Bạn Phải Ăn Rau Xanh Hàng Ngày
                            </Link>
                            <div className={cx('desc')}>
                                Rau là nguồn cung cấp các chất dinh dưỡng cần thiết cho cơ thể như vitamin, khoáng chất,
                                chất xơ và các chất chống oxy hóa.Giảm nguy cơ mắc các bệnh: ăn rau thường xuyên giúp
                                giảm nguy cơ mắc các bệnh như bệnh tim mạch, bệnh tiểu đường, ung thư và bệnh tiêu hóa.
                            </div>
                        </div>
                        <div className={cx('item', 'col-md-4')}>
                            <Link to="/">
                                <div className={cx('image')}>
                                    <img
                                        src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2019/12/blog-6-410x250.jpg"
                                        alt="blog"
                                    />
                                </div>
                            </Link>
                            <div className={cx('info')}>
                                <FontAwesomeIcon icon={faCalendarDays} /> 10-07-2023 / <FontAwesomeIcon icon={faUser} />{' '}
                                bởi admin / <FontAwesomeIcon icon={faComments} /> 6
                            </div>
                            <Link to="/" className={cx('title')}>
                                5 Lý Do Bạn Phải Ăn Rau Xanh Hàng Ngày
                            </Link>
                            <div className={cx('desc')}>
                                Rau là nguồn cung cấp các chất dinh dưỡng cần thiết cho cơ thể như vitamin, khoáng chất,
                                chất xơ và các chất chống oxy hóa.Giảm nguy cơ mắc các bệnh: ăn rau thường xuyên giúp
                                giảm nguy cơ mắc các bệnh như bệnh tim mạch, bệnh tiểu đường, ung thư và bệnh tiêu hóa.
                            </div>
                        </div>
                        <div className={cx('item', 'col-md-4')}>
                            <Link to="/">
                                <div className={cx('image')}>
                                    <img
                                        src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2019/12/blog-6-410x250.jpg"
                                        alt="blog"
                                    />
                                </div>
                            </Link>
                            <div className={cx('info')}>
                                <FontAwesomeIcon icon={faCalendarDays} /> 10-07-2023 / <FontAwesomeIcon icon={faUser} />{' '}
                                bởi admin / <FontAwesomeIcon icon={faComments} /> 6
                            </div>
                            <Link to="/" className={cx('title')}>
                                5 Lý Do Bạn Phải Ăn Rau Xanh Hàng Ngày
                            </Link>
                            <div className={cx('desc')}>
                                Rau là nguồn cung cấp các chất dinh dưỡng cần thiết cho cơ thể như vitamin, khoáng chất,
                                chất xơ và các chất chống oxy hóa.Giảm nguy cơ mắc các bệnh: ăn rau thường xuyên giúp
                                giảm nguy cơ mắc các bệnh như bệnh tim mạch, bệnh tiểu đường, ung thư và bệnh tiêu hóa.
                            </div>
                        </div>
                        <div className={cx('item', 'col-md-4')}>
                            <Link to="/">
                                <div className={cx('image')}>
                                    <img
                                        src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2019/12/blog-6-410x250.jpg"
                                        alt="blog"
                                    />
                                </div>
                            </Link>
                            <div className={cx('info')}>
                                <FontAwesomeIcon icon={faCalendarDays} /> 10-07-2023 / <FontAwesomeIcon icon={faUser} />{' '}
                                bởi admin / <FontAwesomeIcon icon={faComments} /> 6
                            </div>
                            <Link to="/" className={cx('title')}>
                                5 Lý Do Bạn Phải Ăn Rau Xanh Hàng Ngày
                            </Link>
                            <div className={cx('desc')}>
                                Rau là nguồn cung cấp các chất dinh dưỡng cần thiết cho cơ thể như vitamin, khoáng chất,
                                chất xơ và các chất chống oxy hóa.Giảm nguy cơ mắc các bệnh: ăn rau thường xuyên giúp
                                giảm nguy cơ mắc các bệnh như bệnh tim mạch, bệnh tiểu đường, ung thư và bệnh tiêu hóa.
                            </div>
                        </div>
                        <div className={cx('item', 'col-md-4')}>
                            <Link to="/">
                                <div className={cx('image')}>
                                    <img
                                        src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2019/12/blog-6-410x250.jpg"
                                        alt="blog"
                                    />
                                </div>
                            </Link>
                            <div className={cx('info')}>
                                <FontAwesomeIcon icon={faCalendarDays} /> 10-07-2023 / <FontAwesomeIcon icon={faUser} />{' '}
                                bởi admin / <FontAwesomeIcon icon={faComments} /> 6
                            </div>
                            <Link to="/" className={cx('title')}>
                                5 Lý Do Bạn Phải Ăn Rau Xanh Hàng Ngày
                            </Link>
                            <div className={cx('desc')}>
                                Rau là nguồn cung cấp các chất dinh dưỡng cần thiết cho cơ thể như vitamin, khoáng chất,
                                chất xơ và các chất chống oxy hóa.Giảm nguy cơ mắc các bệnh: ăn rau thường xuyên giúp
                                giảm nguy cơ mắc các bệnh như bệnh tim mạch, bệnh tiểu đường, ung thư và bệnh tiêu hóa.
                            </div>
                        </div>
                        <div className={cx('item', 'col-md-4')}>
                            <Link to="/">
                                <div className={cx('image')}>
                                    <img
                                        src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2019/12/blog-6-410x250.jpg"
                                        alt="blog"
                                    />
                                </div>
                            </Link>
                            <div className={cx('info')}>
                                <FontAwesomeIcon icon={faCalendarDays} /> 10-07-2023 / <FontAwesomeIcon icon={faUser} />{' '}
                                bởi admin / <FontAwesomeIcon icon={faComments} /> 6
                            </div>
                            <Link to="/" className={cx('title')}>
                                5 Lý Do Bạn Phải Ăn Rau Xanh Hàng Ngày
                            </Link>
                            <div className={cx('desc')}>
                                Rau là nguồn cung cấp các chất dinh dưỡng cần thiết cho cơ thể như vitamin, khoáng chất,
                                chất xơ và các chất chống oxy hóa.Giảm nguy cơ mắc các bệnh: ăn rau thường xuyên giúp
                                giảm nguy cơ mắc các bệnh như bệnh tim mạch, bệnh tiểu đường, ung thư và bệnh tiêu hóa.
                            </div>
                        </div>
                        <div className={cx('item', 'col-md-4')}>
                            <Link to="/">
                                <div className={cx('image')}>
                                    <img
                                        src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2019/12/blog-6-410x250.jpg"
                                        alt="blog"
                                    />
                                </div>
                            </Link>
                            <div className={cx('info')}>
                                <FontAwesomeIcon icon={faCalendarDays} /> 10-07-2023 / <FontAwesomeIcon icon={faUser} />{' '}
                                bởi admin / <FontAwesomeIcon icon={faComments} /> 6
                            </div>
                            <Link to="/" className={cx('title')}>
                                5 Lý Do Bạn Phải Ăn Rau Xanh Hàng Ngày
                            </Link>
                            <div className={cx('desc')}>
                                Rau là nguồn cung cấp các chất dinh dưỡng cần thiết cho cơ thể như vitamin, khoáng chất,
                                chất xơ và các chất chống oxy hóa.Giảm nguy cơ mắc các bệnh: ăn rau thường xuyên giúp
                                giảm nguy cơ mắc các bệnh như bệnh tim mạch, bệnh tiểu đường, ung thư và bệnh tiêu hóa.
                            </div>
                        </div>
                        <div className={cx('item', 'col-md-4')}>
                            <Link to="/">
                                <div className={cx('image')}>
                                    <img
                                        src="https://demo2.pavothemes.com/freshio/wp-content/uploads/2019/12/blog-6-410x250.jpg"
                                        alt="blog"
                                    />
                                </div>
                            </Link>
                            <div className={cx('info')}>
                                <FontAwesomeIcon icon={faCalendarDays} /> 10-07-2023 / <FontAwesomeIcon icon={faUser} />{' '}
                                bởi admin / <FontAwesomeIcon icon={faComments} /> 6
                            </div>
                            <Link to="/" className={cx('title')}>
                                5 Lý Do Bạn Phải Ăn Rau Xanh Hàng Ngày
                            </Link>
                            <div className={cx('desc')}>
                                Rau là nguồn cung cấp các chất dinh dưỡng cần thiết cho cơ thể như vitamin, khoáng chất,
                                chất xơ và các chất chống oxy hóa.Giảm nguy cơ mắc các bệnh: ăn rau thường xuyên giúp
                                giảm nguy cơ mắc các bệnh như bệnh tim mạch, bệnh tiểu đường, ung thư và bệnh tiêu hóa.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
