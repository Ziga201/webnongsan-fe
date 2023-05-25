import style from './ProductDetail.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(style);
function ProductDetail() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/posts/${id}`)
            .then((response) => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('row')}>
                    <div className={cx('image', 'col-md-6')}>
                        <img src={'http://localhost:8000/api/postImages/' + post.image} />
                    </div>
                    <div className={cx('info', 'col-md-6')}>
                        <div className={cx('stocking')}>Còn hàng</div>
                        <div className={cx('name')}>{post.name}</div>
                        <div className={cx('price')}>{post.price}</div>
                        <div className={cx('desc')}>{post.desc}</div>
                        <div className={cx('add')}>
                            <button className={cx('add-btn')}>Thêm giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
