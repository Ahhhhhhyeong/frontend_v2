// src/pages/ProductDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ProductDetailPage.module.css'; // 새로 적용될 CSS 모듈
import { ChevronLeftIcon, StarIcon } from '../components/Icons'; // 필요한 아이콘 import

// 상품 카드 컴포넌트
const ProductCard = ({ product }) => (
    <div className={styles.card}>
        <img className={styles.img} src={product.mainImage} alt={product.productName} />
        <div className={styles.info}>
            <div className={styles.kg}>{product.productName}</div>
            <div className={styles.price}>
                {/* 할인율은 현재 데이터에 없으므로 임의로 표시합니다. */}
                <div className={styles.div10}>12%</div> 
                <div className={styles.div7}>{product.price || '999,999원'}</div>
            </div>
            <div className={styles.review}>
                <StarIcon />
                <div className={styles.div8}>5.0</div>
                <div className={styles.div8}>(999+)</div>
            </div>
        </div>
    </div>
);

export default function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // sessionStorage에서 상품 데이터를 가져옵니다.
        // 이 예제에서는 등록된 여러 상품 중 하나를 표시합니다.
        // 실제 앱에서는 판매자 ID로 상품 목록을 가져오는 로직이 필요합니다.
        const productKeys = Object.keys(sessionStorage).filter(key => key.startsWith('product-'));
        const lastProductKey = productKeys[productKeys.length - 1]; // 가장 최근 상품을 가져옵니다.
        
        if (lastProductKey) {
            setProduct(JSON.parse(sessionStorage.getItem(lastProductKey)));
        }
    }, [id]);

    if (!product) {
        return <div>상품 정보를 불러오는 중...</div>;
    }

    return (
        <div className={styles.div}>
            {/* 배경 이미지 */}
            <img className={styles.imgIcon} alt="농장 배경" src={product.mainImage} />

            {/* 헤더 */}
            <div className={styles.parent}>
                <Link to="/seller-mypage">
                    <ChevronLeftIcon className={styles.chevronLeftIcon} />
                </Link>
                <div className={styles.div1}>{product.marketName || "새벽들딸기농원"}</div>
            </div>

            {/* 프로필 카드 영역 */}
            <div className={styles.child} />
            <div className={styles.profile}>
                <img className={styles.profileChild} alt="프로필" src={product.mainImage} />
                <div className={styles.group}>
                    <div className={styles.div3}>{product.marketName || "새벽들딸기농원"}</div>
                    <div className={styles.location}>
                        {/* map-pin 아이콘은 현재 없으므로 생략합니다. */}
                        <div className={styles.div4}>충남 논산 연무읍</div>
                    </div>
                    <div className={styles.div5}>{product.description || "딸기에 진심인 새벽들딸기농원입니다."}</div>
                </div>
            </div>

            {/* 리뷰/팔로워 정보 */}
            <div className={styles.infoList}>
                <div className={styles.orderListTitle}>
                    <div className={styles.div14}>0</div>
                    <div className={styles.div15}>리뷰 평점</div>
                </div>
                <div className={styles.infoListChild} />
                <div className={styles.orderListTitle}>
                    <div className={styles.div14}>0</div>
                    <div className={styles.div15}>리뷰수</div>
                </div>
                <div className={styles.infoListChild} />
                <div className={styles.orderListTitle}>
                    <div className={styles.div14}>0</div>
                    <div className={styles.div15}>팔로워</div>
                </div>
            </div>

            {/* 프로필 편집 버튼 */}
            <div className={styles.button}>
                <div className={styles.div2}>프로필 편집</div>
            </div>

            {/* 탭 메뉴 */}
            <div className={styles.tabGroup}>
                <div className={styles.tab}>
                    <div className={styles.div20}>판매 상품</div>
                </div>
                <div className={styles.tab1}>
                    <div className={styles.div20}>게시글</div>
                </div>
            </div>

            {/* 상품 목록 */}
            <div className={styles.list}>
                {/* 현재는 한 개의 상품 데이터만 가져오므로, 
                  같은 상품을 여러 번 표시하여 목록처럼 보이게 합니다. 
                */}
                <ProductCard product={product} />
                <ProductCard product={product} />
            </div>
        </div>
    );
};