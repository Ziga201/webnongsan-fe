import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import postService from '~/services/postService';
import 'bootstrap/dist/css/bootstrap.css';

// import classNames from 'classnames/bind';
// import style from '~/pages/';
// const cx = classNames.bind(style);

function CreateComponent() {
    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
    };

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('price', price);
        formData.append('image', image);
        formData.append('desc', desc);
        formData.append('category', category);

        const response = await postService.create(formData);
        if (response.data.success === true) {
            setMessage('Post created successfully');
        } else {
            setMessage('Post Failed');
        }

        setTimeout(() => {
            setMessage('');
        }, 2000);

        event.target.reset();
        initModal();
    };

    return (
        <>
            {/* <form onSubmit={handleSubmit} className={cx('form-group')}>
                <h2>Thêm sản phẩm</h2>
                <div class="form-group">
                    <label for="name">Tên sản phẩm:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nhập tên sản phẩm"
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="price">Giá:</label>
                    <input
                        type="text"
                        name="price"
                        placeholder="Nhập giá sản phẩm"
                        onChange={(event) => setPrice(event.target.value)}
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="image">Ảnh:</label>
                    <input type="file" name="image" onChange={(event) => setImage(event.target.files[0])} required />
                </div>
                <button type="submit">Thêm</button>
            </form> */}

            <Button variant="primary" onClick={initModal} style={{ fontSize: '16px' }}>
                Thêm
            </Button>
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Thêm</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nhập tên sản phẩm"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                        <input
                            type="text"
                            name="price"
                            placeholder="Nhập giá sản phẩm"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                            required
                        />
                        <input type="file" name="file" onChange={(event) => setImage(event.target.files[0])} />
                        <input
                            type="text"
                            name="desc"
                            placeholder="Nhập mô tả"
                            value={desc}
                            onChange={(event) => setDesc(event.target.value)}
                            required
                        />

                        <select name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                            <option value="Trái cây & Rau củ">Trái cây & Rau củ</option>
                            <option value="Sản phẩm đóng gói">Sản phẩm đóng gói</option>
                            <option value="Sản phẩm chế biến">Sản phẩm chế biến</option>
                            <option value="Hạt giống & cây trồng">Hạt giống & cây trồng</option>
                            <option value="Chưa được phân loại" selected>
                                Chưa được phân loại
                            </option>
                        </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="dark">
                            Thêm
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default CreateComponent;
