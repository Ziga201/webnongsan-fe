import style from './Blog.module.scss';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCalendarDays, faComments, faUser } from '@fortawesome/free-solid-svg-icons';
import blogService from '~/services/blogService';

const cx = classNames.bind(style);

function Blog() {
    const [blogs, setBlogs] = useState({});

    const fetchBlogs = async () => {
        setBlogs(await blogService.getBlogs());
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Chuyen huong detail

    const handleClick = (blogId) => {
        // <Navigate to={`/product/${productId}`} />;
        window.location.href = `/blog/${blogId}`;
    };
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
                    {blogs.data != undefined && blogs.data.data.length > 0 && (
                        <div className={cx('row')}>
                            {blogs.data.data.map((blog) => (
                                <div
                                    key={blog._id}
                                    className={cx('item', 'col-md-4')}
                                    onClick={() => handleClick(blog._id)}
                                >
                                    <div className={cx('image')}>
                                        <img src={'http://localhost:8000/api/blogImages/' + blog.image} alt="blog" />
                                    </div>
                                    <div className={cx('info')}>
                                        <FontAwesomeIcon icon={faCalendarDays} /> {blog.createAt} /{' '}
                                        <FontAwesomeIcon icon={faUser} /> bởi admin /{' '}
                                        <FontAwesomeIcon icon={faComments} /> 6
                                    </div>
                                    <Link to="/">
                                        <div className={cx('title')}>{blog.title}</div>
                                    </Link>
                                    <div className={cx('desc')}>{blog.content}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Blog;
