import style from './Product.module.scss';
import React, { useState, useEffect } from 'react';
import postService from '~/services/postService';

import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
// import ProductDetail from '../ProductDetail';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(style);

function Product() {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        setPosts(await postService.getPosts());
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    console.log(posts);

    // Add to cart
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
        toast.success('Thêm vào giỏ hàng thành công !');

        // const newCartItems = [...cartItems, item];
        // setCartItems(newCartItems);
        // localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        // const data = JSON.parse(localStorage.getItem('cartItems'));
        const product = {
            id: item._id,
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: 1,
        };
        const itemIndex = cartItems.findIndex((i) => i.id === item._id);
        console.log(itemIndex);
        if (itemIndex >= 0) {
            const newCartItems = [...cartItems];
            newCartItems[itemIndex].quantity++;
            setCartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        } else {
            // const newCartItem = { ...cartItems, quantity: 1 };
            // product.quantity++;
            const newCartItems = [...cartItems, product];
            setCartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        }
    }

    // Search item
    const [search, setSearch] = useState('');
    console.log(search);

    // Chuyen huong product detail

    const handleClick = (productId) => {
        // <Navigate to={`/product/${productId}`} />;
        window.location.href = `/product/${productId}`;
    };

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
                        <input
                            type="text"
                            className={cx('search-input')}
                            placeholder="Nhập tên sản phẩm..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </div>
                    {posts.data !== undefined && posts.data.data.length > 0 && (
                        <div className={cx('row')}>
                            {posts.data.data
                                .filter((post) => {
                                    return search.toLowerCase() === ''
                                        ? post
                                        : post.name.toLowerCase().includes(search);
                                })
                                .map((post) => (
                                    <div key={post._id} className={cx('product-block', 'col-md-3')}>
                                        <div onClick={() => handleClick(post._id)}>
                                            <div className={cx('product-img')}>
                                                <img
                                                    src={'http://localhost:8000/api/postImages/' + post.image}
                                                    alt="product"
                                                />
                                            </div>
                                            <div className={cx('product-name')}>{post.name}</div>
                                        </div>

                                        <div className={cx('product-price')}>
                                            {parseInt(post.price).toLocaleString('vi-VN')}
                                        </div>
                                        <button onClick={() => addToCart(post)} className={cx('product-add')}>
                                            Thêm giỏ hàng
                                            <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                                        </button>
                                        <ToastContainer position="bottom-right" />
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Product;
