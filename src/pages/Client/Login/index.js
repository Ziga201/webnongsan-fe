import style from './Login.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import accountService from '~/services/accountService';

const cx = classNames.bind(style);

function Login() {
    const [accounts, setAccounts] = useState({});

    const fetchAccounts = async () => {
        setAccounts(await accountService.getAccounts());
    };

    useEffect(() => {
        fetchAccounts();
    }, [accounts]);

    // Login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        accounts.data.data.forEach((element) => {
            // if (element.username == username && element.password == password) {
            //     // alert('MK đúng');
            //     localStorage.setItem('user', element.username);
            //     window.location.href = '/admin';
            // }

            if (element.username == username && element.password == password && element.username == 'admin') {
                // alert('MK đúng');
                localStorage.setItem('admin', true);
                window.location.href = '/admin';
            } else if (element.username == username && element.password == password && element.username == 'user') {
                // alert('MK đúng');
                localStorage.setItem('user', true);
                window.location.href = '/';
            }
        });

        // const user = accounts
        // console.log(accounts.data.data[0].username);
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     localStorage.setItem('user', true);
    // };
    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Đăng nhập</button>
            </form> */}
            <div className={cx('login-wrap')}>
                <div className={cx('login-html')}>
                    <input id="tab-1" type="radio" name="tab" className={cx('sign-in')} checked />
                    <label for="tab-1" className={cx('tab')}>
                        Đăng nhập
                    </label>
                    <input id="tab-2" type="radio" name="tab" className={cx('sign-up')} />
                    <label for="tab-2" className={cx('tab')}>
                        Đăng ký
                    </label>
                    <form onSubmit={handleSubmit} className={cx('login-form')}>
                        <div className={cx('sign-in-htm')}>
                            <div className={cx('group')}>
                                <label for="user" className={cx('label')}>
                                    Tên tài khoản
                                </label>
                                <input
                                    id="user"
                                    type="text"
                                    className={cx('input')}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className={cx('group')}>
                                <label for="pass" className={cx('label')}>
                                    Mật khẩu
                                </label>
                                <input
                                    id="pass"
                                    type="password"
                                    className={cx('input')}
                                    data-type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={cx('group')}>
                                <input id="check" type="checkbox" className={cx('check')} checked />
                                <label for="check">
                                    <span className={cx('icon')}></span> Nhớ mật khẩu
                                </label>
                            </div>
                            <div className={cx('group')}>
                                <input type="submit" className={cx('button')} value="Sign In" />
                            </div>
                            <div className={cx('hr')}></div>
                            <div className={cx('foot-lnk')}>
                                <a href="#forgot">Freshio chào quý khách</a>
                            </div>
                        </div>
                        {/* <div className={cx('foot-lnk')}>
                            <div className={cx('group')}>
                                <label for="user" className={cx('label')}>
                                    Username
                                </label>
                                <input id="user" type="text" className={cx('input')} />
                            </div>
                            <div className={cx('group')}>
                                <label for="pass" className={cx('label')}>
                                    Password
                                </label>
                                <input id="pass" type="password" className={cx('input')} data-type="password" />
                            </div>
                            <div className={cx('group')}>
                                <label for="pass" className={cx('label')}>
                                    Repeat Password
                                </label>
                                <input id="pass" type="password" className={cx('input')} data-type="password" />
                            </div>
                            <div className={cx('group')}>
                                <label for="pass" className={cx('label')}>
                                    Email Address
                                </label>
                                <input id="pass" type="text" className={cx('input')} />
                            </div>
                            <div className={cx('group')}>
                                <input type="submit" className={cx('button')} value="Sign Up" />
                            </div>
                            <div className={cx('hr')}></div>
                            <div className={cx('foot-lnk')}>
                                <label for="tab-1">Already Member?</label>
                            </div>
                        </div> */}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
