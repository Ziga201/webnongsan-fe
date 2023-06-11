import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PostService from '~/services/postService';
// import classNames from 'classnames/bind';
// import style from './Update.module.scss';

// const cx = classNames.bind(style);

function UpdateComponent(props) {
    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
    };

    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);
    const [id, setId] = useState(props.id);
    const [selectedFile, setSelectedFile] = useState('');
    const [desc, setDesc] = useState(props.desc);
    const [category, setCategory] = useState(props.category);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('desc', desc);
        formData.append('category', category);

        if (selectedFile !== '' && selectedFile.length !== 0) {
            formData.append('image', selectedFile);
        }

        const response = await PostService.update(formData);

        if (response.data.success === true) {
            alert(response.data.msg);
        } else {
            alert(response.data.msg);
        }

        initModal();
    };

    return (
        <>
            <Button variant="success" onClick={initModal} style={{ fontSize: '16px' }}>
                Sửa
            </Button>
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Sửa</Modal.Title>
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
                        <input type="file" name="file" onChange={(event) => setSelectedFile(event.target.files[0])} />
                        <input
                            type="text"
                            name="desc"
                            placeholder="Nhập giá mô tả"
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
                            Sửa
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default UpdateComponent;
