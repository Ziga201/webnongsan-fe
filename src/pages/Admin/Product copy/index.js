import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import style from './Product.module.scss';
// import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { useState, useEffect } from 'react';
import postService from '~/services/postService';

import UpdateComponent from '~/pages/Product/Update/UpdateComponent';
import CreateComponent from './Create/CreateComponent';

const cx = classNames.bind(style);

function Product() {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        setPosts(await postService.getPosts());
    };

    useEffect(() => {
        fetchPosts();
    }, [posts]);

    const deletePost = async (id, e) => {
        var response = await postService.deletePost(id);
        if (response.data.success === true) {
            alert('Xoá thành công');
            document.getElementById(id).parentElement.remove();
        } else {
            alert(response.data.msg);
        }
    };

    return (
        <div className={cx('hug')}>
            <div className={cx('heading')}>
                <div className="col">
                    <div className={cx('name_table')}>Danh mục sản phẩm</div>
                </div>
                {/* <Link to="/create">
                    <button className="btn btn-info" style={{ fontSize: '16px' }}>
                        Thêm
                    </button>
                </Link> */}

                <CreateComponent />
            </div>

            {posts.data !== undefined && posts.data.data.length > 0 && (
                <div className={cx('wrapper')}>
                    <table className="table" style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Ảnh</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.data.data.map((post, index) => (
                                <tr>
                                    <td>{index}</td>
                                    <td>{post.name}</td>
                                    <td>{post.price}</td>
                                    <td>
                                        <img
                                            src={'http://localhost:8000/api/postImages/' + post.image}
                                            style={{ width: '50px', height: '50px' }}
                                            alt="product"
                                        />
                                    </td>
                                    <td>
                                        {/* <Link to={`/edit`}> */}
                                        {/* <button className="btn btn-primary" style={{ 'margin-right': '10px' }}>
                                                Sửa
                                            </button> */}
                                        <UpdateComponent
                                            id={post._id}
                                            name={post.name}
                                            price={post.price}
                                            style={{ fontSize: '16px' }}
                                        />
                                        {/* </Link> */}
                                        <button
                                            style={{ marginLeft: '5px', fontSize: '16px' }}
                                            id={post._id}
                                            onClick={(e) => deletePost(post._id, e)}
                                            className="btn btn-danger"
                                        >
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Product;
