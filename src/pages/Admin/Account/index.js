import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import style from '~/pages/Admin/Page.module.scss';
// import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { useState, useEffect } from 'react';
import accountService from '~/services/accountService';

import CreateComponent from './Create/CreateComponent';
import UpdateComponent from './Update/UpdateComponent';

const cx = classNames.bind(style);

function Account() {
    const [accounts, setAccounts] = useState({});

    const fetchAccounts = async () => {
        setAccounts(await accountService.getAccounts());
    };

    useEffect(() => {
        fetchAccounts();
    }, [accounts]);

    const deleteAccount = async (id, e) => {
        var response = await accountService.deleteAccount(id);
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
                    <div className={cx('name_table')}>Danh mục tài khoản</div>
                </div>
                {/* <Link to="/create">
                    <button className="btn btn-info" style={{ fontSize: '16px' }}>
                        Thêm
                    </button>
                </Link> */}

                <CreateComponent />
            </div>

            {accounts.data !== undefined && accounts.data.data.length > 0 && (
                <div className={cx('wrapper')}>
                    <table className="table" style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>
                                <th>Mật khẩu</th>
                                <th>Email</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.data.data.map((account, index) => (
                                <tr>
                                    <td>{index}</td>
                                    <td>{account.username}</td>
                                    <td>{account.password}</td>

                                    <td>{account.email}</td>

                                    <td>
                                        <UpdateComponent
                                            id={account._id}
                                            username={account.username}
                                            password={account.password}
                                            email={account.email}
                                            style={{ fontSize: '16px' }}
                                        />
                                        <button
                                            style={{ marginLeft: '5px', fontSize: '16px' }}
                                            id={account._id}
                                            onClick={(e) => deleteAccount(account._id, e)}
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

export default Account;
