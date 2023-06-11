import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';

import style from '~/pages/Admin/Page.module.scss';
// import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';
import postService from '~/services/postService';

import UpdateComponent from './Update/UpdateComponent';
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
    // Search item
    const [search, setSearch] = useState('');

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
            <div className={cx('search')}>
                <input
                    type="text"
                    className={cx('search-input')}
                    placeholder="Nhập tên sản phẩm ..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
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
                                <th>Mô tả</th>
                                <th>Loại</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.data.data
                                .filter((post) => {
                                    return search.toLowerCase() === ''
                                        ? post
                                        : post.name.toLowerCase().includes(search.toLowerCase());
                                })
                                .map((post, index) => (
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
                                        <td className={cx('content-fix')}>{post.desc}</td>
                                        <td>{post.category}</td>

                                        <td>
                                            <UpdateComponent
                                                id={post._id}
                                                name={post.name}
                                                price={post.price}
                                                desc={post.desc}
                                                category={post.category}
                                                style={{ fontSize: '16px' }}
                                            />
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
