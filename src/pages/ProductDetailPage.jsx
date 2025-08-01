// src/pages/ProductDetailPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductDetailPage.module.css';
import { ChevronRightIcon, HeartIcon, StarIcon } from '../components/Icons';

// 임시 상품 데이터
const product = {
    brandName: '새벽들딸기농원',
    brandLocation: '충남 논산 연무읍',
    productName: '[당일 수확] 논산 유기농 설향 딸기 1kg',
    price: '99,999원',
    discountPrice: '99,999원',
    discount: '99%',
    rating: '5.0',
    reviews: '999+',
    shipping: '7/24 도착 예정',
    shippingInfo: '무료배송 · 결제 3일 이내 출고 · CJ대한통운',
    reward: '최대 2,500원 적립',
    detailImages: [
        'https://via.placeholder.com/375x375.png?text=Detail+Image+1',
        'https://via.placeholder.com/375x375.png?text=Detail+Image+2',
        'https://via.placeholder.com/375x375.png?text=Detail+Image+3',
        'https://via.placeholder.com/375x375.png?text=Detail+Image+4',
    ],
};

export default function ProductDetailPage() {
    return (
        <div className={styles.div}>
            {/* 상품 이미지 섹션 */}
            <div className={styles.img}>
                <div className={styles.img1} />
            </div>

            {/* 헤더 */}
            <div className={styles.header}>
                <Link to="/">
                    <img className={styles.chevronLeftIcon} alt="" src="chevron-left.svg" />
                </Link>
                <div className={styles.div26}>상세 페이지</div>
            </div>

            {/* 상품 정보 및 탭 섹션 */}
            <div className={styles.infoAndTab}>
                <div className={styles.info}>
                    <div className={styles.brand}>
                        <Link to={`/brand/${product.brandName}`} className={styles.brand1}>
                            <div className={styles.brandChild} />
                            <div className={styles.div1}>{product.brandName}</div>
                        </Link>
                        <ChevronRightIcon className={styles.chevronRightIcon} />
                    </div>
                    <div className={styles.productInfo}>
                        <div className={styles.kg}>{product.productName}</div>
                        <div className={styles.starParent}>
                            <StarIcon className={styles.starIcon} />
                            <div className={styles.div2}>{product.rating}</div>
                            <div className={styles.div2}>({product.reviews})</div>
                        </div>
                        <div className={styles.price}>
                            <b className={styles.b}>{product.discount}</b>
                            <b className={styles.b1}>{product.discountPrice}</b>
                        </div>
                    </div>
                    <div className={styles.listParent}>
                        <div className={styles.list}>
                            <div className={styles.div5}>{product.brandName}</div>
                            <div className={styles.cj}>김준식 농부</div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.div5}>지역</div>
                            <div className={styles.cj}>{product.brandLocation}</div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.div5}>재배방식</div>
                            <div className={styles.cj}>무농약, 천연 미생물 사용</div>
                        </div>
                    </div>
                    <div className={styles.listParent}>
                        <div className={styles.list}>
                            <div className={styles.div1}>배송</div>
                            <div className={styles.cj}>
                                <p className={styles.p}>{product.shipping}</p>
                                <p className={styles.p}>{product.shippingInfo}</p>
                            </div>
                        </div>
                        <div className={styles.list5}>
                            <div className={styles.div1}>적립</div>
                            <div className={styles.cj}>{product.reward}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.tabBar}>
                    <div className={styles.tab}>
                        <div className={styles.div16}>상세</div>
                    </div>
                    <div className={styles.tab1}>
                        <div className={styles.div16}>후기</div>
                        <div className={styles.div18}>{product.reviews}</div>
                    </div>
                </div>
            </div>

            {/* 상품 상세 내용 */}
            <div className={styles.div21}>
                <div className={styles.contents}>
                    <b className={styles.b2}>우리 수박이 자라는 밭이에요</b>
                    <div className={styles.div22}>강원도 평창에서 키운 수박이에요. 산속 시원한 기온 덕분에 당도가 높고 과육이 아삭해요.</div>
                    <div className={styles.contentsChild} />
                </div>
                <div className={styles.contents}>
                    <b className={styles.b2}>이렇게 정성껏 키워요</b>
                    <div className={styles.div22}>매일 아침 농장에 나가 수분과 햇볕을 조절하며 키워요. 농약은 최소한으로 줄이고, 자연에 가까운 방식으로 재배합니다</div>
                    <div className={styles.contentsChild} />
                </div>
                <div className={styles.contents}>
                    <b className={styles.b2}>수확하자마자 바로 선별해요</b>
                    <div className={styles.div22}>신선함을 강조하며, 정성껏 선별하고 빠르게 배송 준비를 한다는 신뢰감을 전달합니다.</div>
                    <div className={styles.contentsChild} />
                </div>
                <div className={styles.contents}>
                    <b className={styles.b2}>안전하게 포장해 보내드려요</b>
                    <div className={styles.div22}>
                        <p className={styles.p}>수확 후 바로 선별하고, 신선함을 유지할 수 있도록 아이스팩과 함께 안전하게 포장해요.</p>
                        <p className={styles.p}>파손되지 않도록 두 겹으로 감싸 배송합니다.</p>
                    </div>
                    <div className={styles.contentsChild} />
                </div>
            </div>

            {/* 하단 버튼 바 */}
            <div className={styles.bottomButton}>
                <HeartIcon className={styles.heartIcon} />
                <div className={styles.buttonGroup}>
                    <button className={styles.button}>
                        <div className={styles.div19}>장바구니</div>
                    </button>
                    <button className={styles.button1}>
                        <div className={styles.div19}>바로구매</div>
                    </button>
                </div>
            </div>
        </div>
    );
};