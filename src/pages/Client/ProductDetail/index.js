import style from './ProductDetail.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import postService from '~/services/postService';

const cx = classNames.bind(style);
function ProductDetail() {
    // const { id } = useParams();
    // const [post, setPost] = useState({});
    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:8000/api/get-post/${id}`)
    //         .then((response) => {
    //             console.log(response.data.data);
    //             setPost(response.data.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [id]);
    // console.log(post);

    const { id } = useParams();
    const [post, setPost] = useState({});

    const fetchPosts = async () => {
        setPost((await postService.getPostById(id)).data.data);
    };
    console.log(post);

    useEffect(() => {
        fetchPosts();
    }, [id]);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('row')}>
                    <div className={cx('image', 'col-md-6')}>
                        <img src={'http://localhost:8000/api/postImages/' + post.image} alt="product" />
                    </div>
                    <div className={cx('info', 'col-md-6')}>
                        <div className={cx('stocking')}>Còn hàng</div>
                        <div className={cx('name')}>{post.name}</div>
                        <div className={cx('price')}>{post.price}</div>
                        {/* <div className={cx('desc')}>{post.data.desc}</div> */}
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
