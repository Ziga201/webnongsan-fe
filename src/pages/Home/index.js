import style from './Home.module.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames/bind';
import brand1 from '~/assets/images/brand1.svg';
import brand2 from '~/assets/images/brand2.svg';
import brand3 from '~/assets/images/brand3.svg';
import brand4 from '~/assets/images/brand4.svg';
import brand5 from '~/assets/images/brand5.svg';
import brand6 from '~/assets/images/brand6.svg';
import { Link } from 'react-router-dom';
import { faArrowRight, faCircleChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Tab, TabList, TabPanel } from 'react-tabs';

const cx = classNames.bind(style);

function Home() {
    // console.log(brand);
    return (
        <>
            <div className={cx('banner')}>
                <div className={cx('wrapper')}>
                    <div className={cx('hug-banner')}>
                        <div className={cx('logo-banner')}>
                            <img
                                src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/rev-slider_h3-shape.png"
                                alt="logo"
                            />
                        </div>
                        <div className={cx('slogan')}>Cung cấp nông sản</div>
                        <div className={cx('highlight')}>Highest Quanlity</div>
                        <Link to="/">
                            <div className={cx('btn')}>
                                Khám phá sản phẩm
                                <FontAwesomeIcon className={cx('icon')} icon={faArrowRight} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={cx('service')}>
                <div className={cx('wrapper')}>
                    <div className={cx('list', 'row')}>
                        <div className={cx('item', 'col-md-4')}>
                            <div className={cx('sticker')}>
                                <img
                                    src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/1.png"
                                    alt="1"
                                />
                            </div>
                            <div className={cx('title')}>Pick a starter option</div>
                            <div className={cx('desc')}>
                                Choose from select produce to start. Keep, add, or remove items
                            </div>
                        </div>
                        <div className={cx('item', 'col-md-4')}>
                            <div className={cx('sticker')}>
                                <img
                                    src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/2.png"
                                    alt="1"
                                />
                            </div>
                            <div className={cx('title')}>Pick a starter option</div>
                            <div className={cx('desc')}>
                                Choose from select produce to start. Keep, add, or remove items
                            </div>
                        </div>
                        <div className={cx('item', 'col-md-4')}>
                            <div className={cx('sticker')}>
                                <img
                                    src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/3.png"
                                    alt="1"
                                />
                            </div>
                            <div className={cx('title')}>Pick a starter option</div>
                            <div className={cx('desc')}>
                                Choose from select produce to start. Keep, add, or remove items
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('product')}>
                <div className={cx('text-editor')}>Discover</div>
                <div className={cx('heading')}>Sản phẩm của chúng tôi</div>

                <div className={cx('tab')}>
                    <div className={cx('tab-link', 'active')}>Tất cả</div>
                    <div className={cx('tab-link')}>Rau củ</div>
                    <div className={cx('tab-link')}>Trái cây</div>
                    <div className={cx('tab-link')}>Hạt giống</div>
                </div>
                <div className={cx('row', 'wrapper')}>
                    <div className={cx('product-block', 'col-md-2dot4')}>
                        <div className={cx('product-img')}>
                            <img
                                src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/40-450x420.jpg"
                                alt="product"
                            />
                        </div>
                        <div className={cx('product-name')}>Chuối rừng</div>
                        <div className={cx('product-price')}>200.000 VND</div>
                        <div className={cx('product-add')}>
                            Thêm giỏ hàng
                            <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                        </div>
                    </div>
                    <div className={cx('product-block', 'col-md-2dot4')}>
                        <div className={cx('product-img')}>
                            <img
                                src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/40-450x420.jpg"
                                alt="product"
                            />
                        </div>
                        <div className={cx('product-name')}>Chuối rừng</div>
                        <div className={cx('product-price')}>200.000 VND</div>
                        <div className={cx('product-add')}>
                            Thêm giỏ hàng
                            <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                        </div>
                    </div>
                    <div className={cx('product-block', 'col-md-2dot4')}>
                        <div className={cx('product-img')}>
                            <img
                                src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/40-450x420.jpg"
                                alt="product"
                            />
                        </div>
                        <div className={cx('product-name')}>Chuối rừng</div>
                        <div className={cx('product-price')}>200.000 VND</div>
                        <div className={cx('product-add')}>
                            Thêm giỏ hàng
                            <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                        </div>
                    </div>
                    <div className={cx('product-block', 'col-md-2dot4')}>
                        <div className={cx('product-img')}>
                            <img
                                src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/40-450x420.jpg"
                                alt="product"
                            />
                        </div>
                        <div className={cx('product-name')}>Chuối rừng</div>
                        <div className={cx('product-price')}>200.000 VND</div>
                        <div className={cx('product-add')}>
                            Thêm giỏ hàng
                            <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                        </div>
                    </div>
                    <div className={cx('product-block', 'col-md-2dot4')}>
                        <div className={cx('product-img')}>
                            <img
                                src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/40-450x420.jpg"
                                alt="product"
                            />
                        </div>
                        <div className={cx('product-name')}>Chuối rừng</div>
                        <div className={cx('product-price')}>200.000 VND</div>
                        <div className={cx('product-add')}>
                            Thêm giỏ hàng
                            <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className={cx('row', 'wrapper')}>
                    <div className={cx('product-block', 'col-md-2dot4')}>
                        <div className={cx('product-img')}>
                            <img
                                src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/40-450x420.jpg"
                                alt="product"
                            />
                        </div>
                        <div className={cx('product-name')}>Chuối rừng</div>
                        <div className={cx('product-price')}>200.000 VND</div>
                        <div className={cx('product-add')}>
                            Thêm giỏ hàng
                            <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                        </div>
                    </div>
                    <div className={cx('product-block', 'col-md-2dot4')}>
                        <div className={cx('product-img')}>
                            <img
                                src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/40-450x420.jpg"
                                alt="product"
                            />
                        </div>
                        <div className={cx('product-name')}>Chuối rừng</div>
                        <div className={cx('product-price')}>200.000 VND</div>
                        <div className={cx('product-add')}>
                            Thêm giỏ hàng
                            <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                        </div>
                    </div>
                    <div className={cx('product-block', 'col-md-2dot4')}>
                        <div className={cx('product-img')}>
                            <img
                                src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/40-450x420.jpg"
                                alt="product"
                            />
                        </div>
                        <div className={cx('product-name')}>Chuối rừng</div>
                        <div className={cx('product-price')}>200.000 VND</div>
                        <div className={cx('product-add')}>
                            Thêm giỏ hàng
                            <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                        </div>
                    </div>
                    <div className={cx('product-block', 'col-md-2dot4')}>
                        <div className={cx('product-img')}>
                            <img
                                src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/40-450x420.jpg"
                                alt="product"
                            />
                        </div>
                        <div className={cx('product-name')}>Chuối rừng</div>
                        <div className={cx('product-price')}>200.000 VND</div>
                        <div className={cx('product-add')}>
                            Thêm giỏ hàng
                            <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                        </div>
                    </div>
                    <div className={cx('product-block', 'col-md-2dot4')}>
                        <div className={cx('product-img')}>
                            <img
                                src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/40-450x420.jpg"
                                alt="product"
                            />
                        </div>
                        <div className={cx('product-name')}>Chuối rừng</div>
                        <div className={cx('product-price')}>200.000 VND</div>
                        <div className={cx('product-add')}>
                            Thêm giỏ hàng
                            <FontAwesomeIcon className={cx('add-icon')} icon={faPlus} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('reason')}>
                <div className={cx('reason-bg')}>
                    <div className={cx('text-editor')}>Discover</div>
                    <div className={cx('heading')}>Sản phẩm của chúng tôi</div>

                    <div className={cx('wrapper', 'row')}>
                        <div className="col-md-6"></div>
                        <div className={cx('reason-list', 'col-md-6')}>
                            <div className={cx('reason-item')}>
                                <div className={cx('reason-drop')}>
                                    <FontAwesomeIcon icon={faCircleChevronDown} />
                                </div>
                                <div className={cx('reason-text')}>Trồng bằng phân bón tự nhiên</div>
                            </div>
                            <div className={cx('reason-item')}>
                                <div className={cx('reason-drop')}>
                                    <FontAwesomeIcon icon={faCircleChevronDown} />
                                </div>
                                <div className={cx('reason-text')}>Cỏ dại được kiểm soát tự nhiên</div>
                            </div>
                            <div className={cx('reason-item')}>
                                <div className={cx('reason-drop')}>
                                    <FontAwesomeIcon icon={faCircleChevronDown} />
                                </div>
                                <div className={cx('reason-text')}>Phòng bệnh bằng phương pháp tự nhiên</div>
                            </div>
                            <div className={cx('reason-item')}>
                                <div className={cx('reason-drop')}>
                                    <FontAwesomeIcon icon={faCircleChevronDown} />
                                </div>
                                <div className={cx('reason-text')}>Sản phẩm hữu cơ chứa ít thuốc trừ sâu hơn</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('feedback')}>
                <div className={cx('wrapper')}>
                    <div className={cx('row')}>
                        <div className={cx('person', 'col-md-4')}>
                            <div className={cx('avatar')}>
                                <img
                                    src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/320091947_991909111767356_8340682896527326814_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Val1tP2wn_gAX-90lLe&_nc_ht=scontent.fhan15-2.fna&oh=00_AfBuGqHGOqNNsDr0H52YfKNH1hqgX2pRx0OwWEl7qiAUmw&oe=64406A57"
                                    alt="avatar"
                                />
                            </div>
                            <div className={cx('speech')}>
                                "Sau khi sử dụng khu vườn, công việc kinh doanh của tôi tăng vọt! Nếu bạn không chắc
                                chắn, hãy luôn đi làm vườn. Điều này đơn giản là không thể tin được! Cảm ơn garden,
                                chúng tôi vừa ra mắt trang web thứ 5"
                            </div>
                            <div className={cx('info')}>Tùng - Food Dong Anh Store</div>
                        </div>
                        <div className={cx('person', 'col-md-4')}>
                            <div className={cx('avatar')}>
                                <img
                                    src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/320091947_991909111767356_8340682896527326814_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Val1tP2wn_gAX-90lLe&_nc_ht=scontent.fhan15-2.fna&oh=00_AfBuGqHGOqNNsDr0H52YfKNH1hqgX2pRx0OwWEl7qiAUmw&oe=64406A57"
                                    alt="avatar"
                                />
                            </div>
                            <div className={cx('speech')}>
                                "Sau khi sử dụng khu vườn, công việc kinh doanh của tôi tăng vọt! Nếu bạn không chắc
                                chắn, hãy luôn đi làm vườn. Điều này đơn giản là không thể tin được! Cảm ơn garden,
                                chúng tôi vừa ra mắt trang web thứ 5"
                            </div>
                            <div className={cx('info')}>Tùng - Food Dong Anh Store</div>
                        </div>
                        <div className={cx('person', 'col-md-4')}>
                            <div className={cx('avatar')}>
                                <img
                                    src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/320091947_991909111767356_8340682896527326814_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Val1tP2wn_gAX-90lLe&_nc_ht=scontent.fhan15-2.fna&oh=00_AfBuGqHGOqNNsDr0H52YfKNH1hqgX2pRx0OwWEl7qiAUmw&oe=64406A57"
                                    alt="avatar"
                                />
                            </div>
                            <div className={cx('speech')}>
                                "Sau khi sử dụng khu vườn, công việc kinh doanh của tôi tăng vọt! Nếu bạn không chắc
                                chắn, hãy luôn đi làm vườn. Điều này đơn giản là không thể tin được! Cảm ơn garden,
                                chúng tôi vừa ra mắt trang web thứ 5"
                            </div>
                            <div className={cx('info')}>Tùng - Food Dong Anh Store</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('brand')}>
                <div className={cx('wrapper', 'row')}>
                    <div className={cx('logo', 'col-md-2')}>
                        <img src={brand1} alt="brand1" />
                    </div>
                    <div className={cx('logo', 'col-md-2')}>
                        <img src={brand2} alt="brand1" />
                    </div>
                    <div className={cx('logo', 'col-md-2')}>
                        <img src={brand3} alt="brand1" />
                    </div>
                    <div className={cx('logo', 'col-md-2')}>
                        <img src={brand4} alt="brand1" />
                    </div>
                    <div className={cx('logo', 'col-md-2')}>
                        <img src={brand5} alt="brand1" />
                    </div>
                    <div className={cx('logo', 'col-md-2')}>
                        <img src={brand6} alt="brand1" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
