// src/pages/ProductDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import styles from './ProductDetailPage.module.css';
import { ChevronRightIcon, HeartIcon, StarIcon, ChevronLeftIcon } from '../components/Icons';

export default function ProductDetailPage() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const isPreview = location.pathname.includes('/preview');

    useEffect(() => {
        if (isPreview) {
            setProduct(location.state);
        } else {
            const storedProduct = sessionStorage.getItem(`product-${id}`);
            if (storedProduct) {
                setProduct(JSON.parse(storedProduct));
            } else {
                console.log('상품 데이터를 찾을 수 없습니다.');
            }
        }
    }, [id, isPreview, location.state]);

    if (!product) {
        return <div>상품 정보를 불러오는 중...</div>;
    }

    const handleRegister = () => {
        const newProductId = Date.now();
        sessionStorage.setItem(`product-${newProductId}`, JSON.stringify(product));
        navigate(`/product-registration-confirmation?id=${newProductId}`);
    };

    return (
        <div className={styles.div}>
            {/* 상품 이미지 섹션 */}
            <div className={styles.img}>
                {product.mainImage && (
                    <img src={product.mainImage} alt={product.productName} className="w-full h-full object-cover" />
                )}
            </div>

            {/* 헤더 */}
            <div className={styles.header}>
                <Link to={isPreview ? '/register-product/detail' : '/'}>
                    <ChevronLeftIcon className={styles.chevronLeftIcon} />
                </Link>
                <div className={styles.div26}>{isPreview ? '상품 등록 미리보기' : '상세 페이지'}</div>
            </div>

            {/* 상품 정보 및 탭 섹션 */}
            <div className={styles.infoAndTab}>
                <div className={styles.info}>
                    <div className={styles.brand}>
                        <Link to={`/brand/${product.brandName}`} className={styles.brand1}>
                            <div className={styles.brandChild} />
                            <div className={styles.div1}>농부 이름 (예시)</div>
                        </Link>
                        <ChevronRightIcon className={styles.chevronRightIcon} />
                    </div>
                    <div className={styles.productInfo}>
                        <div className={styles.kg}>{product.productName}</div>
                        <div className={styles.starParent}>
                            <StarIcon className={styles.starIcon} />
                            <div className={styles.div2}>5.0</div>
                            <div className={styles.div2}>(999+)</div>
                        </div>
                        <div className={styles.price}>
                            <b className={styles.b}>99%</b>
                            <b className={styles.b1}>{product.price || '가격 미정'}</b>
                        </div>
                    </div>
                    <div className={styles.listParent}>
                        <div className={styles.list}>
                            <div className={styles.div5}>농부명</div>
                            <div className={styles.cj}>김준식 농부</div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.div5}>지역</div>
                            <div className={styles.cj}>충남 논산 연무읍</div>
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
                                <p className={styles.p}>7/24 도착 예정</p>
                                <p className={styles.p}>무료배송 · 결제 3일 이내 출고 · CJ대한통운</p>
                            </div>
                        </div>
                        <div className={styles.list5}>
                            <div className={styles.div1}>적립</div>
                            <div className={styles.cj}>최대 2,500원 적립</div>
                        </div>
                    </div>
                </div>
                <div className={styles.tabBar}>
                    <div className={styles.tab}>
                        <div className={styles.div16}>상세</div>
                    </div>
                    <div className={styles.tab1}>
                        <div className={styles.div16}>후기</div>
                        <div className={styles.div18}>999+</div>
                    </div>
                </div>
            </div>

            {/* 상품 상세 내용 */}
            <div className={styles.div21}>
                <div className={styles.contents}>
                    <b className={styles.b2}>상품 설명</b>
                    <div className={styles.div22}>{product.description}</div>
                </div>
                {product.detailImages && product.detailImages.map((imgSrc, index) => (
                    <div key={index} className={styles.contents}>
                        <b className={styles.b2}>상세 이미지 {index + 1}</b>
                        <img src={imgSrc} alt={`상세 이미지 ${index + 1}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>

            {/* 하단 버튼 바 (미리보기일 경우 다르게 표시) */}
            {isPreview ? (
                <div className={styles.bottomButton}>
                    <button onClick={handleRegister} className="w-full px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600">
                        이대로 등록하기
                    </button>
                </div>
            ) : (
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
            )}
        </div>
    );
};