// pages/ProductDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '@/hooks/useProduct';
import { ProductHeader } from '@/components/ProductDetail/ProductHeader';
import { ProductInfo } from '@/components/ProductDetail/ProductInfo';
import { ProductDetailContent } from '@/components/ProductDetail/ProductDetailContent';
import { ProductActions } from '@/components/ProductDetail/ProductActions';
import styles from './ProductDetailPage.module.css';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(id);

  const handleBack = () => navigate(-1);

  const handleAddToCart = () => {
    // 장바구니 추가 로직
    console.log('장바구니에 추가');
  };

  const handleBuyNow = () => {
    // 바로구매 로직
    console.log('바로구매');
    // TODO: 구매 옵션 모달 열기
  };

  const handleToggleWishlist = () => {
    // 찜하기 토글 로직
    console.log('찜하기 토글');
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error || !product) {
    return <div>{error || '상품을 찾을 수 없습니다.'}</div>;
  }

  return (
    <div className={`${styles.div} h-full pb-20`}>
      <img className={styles.imgIcon} src={product.mainImage} alt={product.productName} />

      <ProductHeader onBack={handleBack} />

      <div className={styles.infoAndTab}>
        <ProductInfo product={product} />
      </div>

      <ProductDetailContent details={product.details} />

      <ProductActions onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} onToggleWishlist={handleToggleWishlist} />
    </div>
  );
}
