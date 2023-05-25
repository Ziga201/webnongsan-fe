import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import accountService from '~/services/accountService';
import 'bootstrap/dist/css/bootstrap.css';

// import classNames from 'classnames/bind';
// import style from '~/pages/';
// const cx = classNames.bind(style);

function CreateComponent() {
    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('username', username);
        formData.append('password', password);
        formData.append('email', email);

        const response = await accountService.create(formData);
        if (response.data.success === true) {
            setMessage('Tạo tài khoản thành công');
        } else {
            setMessage('Tạo tài khoản thất bại');
        }

        setTimeout(() => {
            setMessage('');
        }, 2000);

        event.target.reset();
        initModal();
    };

    return (
        <>
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
                            name="username"
                            placeholder="Nhập tài khoản"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            required
                        />
                        <input
                            type="text"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
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
