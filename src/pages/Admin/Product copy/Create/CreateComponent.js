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
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('price', price);
        formData.append('image', image);

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
