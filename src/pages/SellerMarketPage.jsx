// src/pages/SellerMarketPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SellerMarketPage.module.css';
import { ChevronLeftIcon, StarIcon } from '../components/Icons';

// 상품 카드 컴포넌트
const ProductCard = ({ product }) => (
    <div className={styles.card}>
        {/* ✅ 깨진 이미지 수정: Base64 데이터를 src에 직접 바인딩 */}
        <img className={styles.img} src={product.mainImage} alt={product.productName} />
        <div className={styles.info}>
            <div className={styles.kg}>{product.productName}</div>
            <div className={styles.price}>
                {/* ✅ 더미 데이터 수정: 등록된 할인율 표시 */}
                <div className={styles.div10}>{product.discount}%</div>
                <div className={styles.div7}>
                    {product.options[0]?.price ? `${Number(product.options[0].price).toLocaleString()}원` : '가격 미정'}
                </div>
            </div>
            <div className={styles.review}>
                <StarIcon />
                <div className={styles.div8}>{product.rating || '5.0'}</div>
                <div className={styles.div8}>({product.reviews || '999+'})</div>
            </div>
        </div>
    </div>
);

export default function SellerMarketPage() {
    const [products, setProducts] = useState([]);
    const [sellerInfo, setSellerInfo] = useState({});

    useEffect(() => {
        // ✅ 데이터 처리: localStorage에서 데이터를 불러와 최신순으로 정렬
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        // ID(타임스탬프)를 기준으로 내림차순 정렬하여 최신순으로 만듭니다.
        storedProducts.sort((a, b) => b.id - a.id);
        
        setProducts(storedProducts);

        // ✅ 더미 데이터 수정: 등록된 상품 중 가장 최신 정보로 판매자 프로필을 설정
        if (storedProducts.length > 0) {
            const latestProduct = storedProducts[0];
            setSellerInfo({
                name: latestProduct.marketName,
                description: latestProduct.description.split('\n')[0],
                profileImage: latestProduct.mainImage,
                backgroundImage: latestProduct.detailImages[0] || latestProduct.mainImage
            });
        }
    }, []);

    return (
        <div className={styles.div}>
            {/* --- ✨ 4. 버튼 UI 개선 --- */}
            <Link to="/" className={styles.goBackButton}>메인 페이지로 돌아가기</Link>
            
            <img className={styles.imgIcon} alt="농장 배경" src={sellerInfo.backgroundImage || 'https://placehold.co/375x375'} />
            
            <div className={styles.parent}>
                <Link to="/seller-mypage">
                    <ChevronLeftIcon className={styles.chevronLeftIcon} />
                </Link>
                {/* ✅ 더미 데이터 수정: 등록된 농장 이름으로 교체 */}
                <div className={styles.div1}>{sellerInfo.name || "내 마켓"}</div>
            </div>
            <div className={styles.child} />
            <div className={styles.profile}>
                <img className={styles.profileChild} alt="프로필" src={sellerInfo.profileImage || 'https://placehold.co/108x108'} />
                <div className={styles.group}>
                    <div className={styles.div3}>{sellerInfo.name || "내 마켓"}</div>
                    <div className={styles.location}>
                        <div className={styles.div4}>서울특별시 영등포구 영신로34길</div>
                    </div>
                    <div className={styles.div5}>{sellerInfo.description || "마켓 한줄소개입니다."}</div>
                </div>
            </div>
            
            {/* ... (리뷰/팔로워 정보, 프로필 편집 버튼, 탭 메뉴 등은 이전과 동일) ... */}
            <div className={styles.infoList}>
                <div className={styles.orderListTitle}><div className={styles.div14}>0</div><div className={styles.div15}>리뷰 평점</div></div>
                <div className={styles.infoListChild} />
                <div className={styles.orderListTitle}><div className={styles.div14}>0</div><div className={styles.div15}>리뷰수</div></div>
                <div className={styles.infoListChild} />
                <div className={styles.orderListTitle}><div className={styles.div14}>0</div><div className={styles.div15}>팔로워</div></div>
            </div>
            <div className={styles.button}><div className={styles.div2}>프로필 편집</div></div>
            <div className={styles.tabGroup}>
                <div className={styles.tab}><div className={styles.div20}>판매 상품</div></div>
                <div className={styles.tab1}><div className={styles.div20}>게시글</div></div>
            </div>
            
            {/* ✅ 데이터 처리: 저장된 모든 상품을 목록으로 표시 */}
            <div className={styles.list}>
                {products.length > 0 ? (
                    products.map(product => <ProductCard key={product.id} product={product} />)
                ) : (
                    <p className="text-center text-gray-500 w-full">등록된 상품이 없습니다.</p>
                )}
            </div>
        </div>
    );
};