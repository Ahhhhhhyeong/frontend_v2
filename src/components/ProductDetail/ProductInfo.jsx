// components/ProductDetail/ProductInfo.jsx
import React from 'react';
import { StarIcon } from '@/components/icons/StarIcon';
import { formatPrice, calculateDiscountedPrice } from '@/utils/formatPrice';
import styles from '@/pages/ProductDetailPage.module.css';

export const ProductInfo = ({ product }) => {
  const firstOptionPrice = product.options?.[0]?.price;
  const discountedPrice = calculateDiscountedPrice(firstOptionPrice, product.discount);

  return (
    <div className={styles.info}>
      <div className={styles.brand}>
        {/* 판매자 정보 */}
        <div className={styles.brand1}>
          <img className={styles.brandChild} src={product.mainImage} alt={product.marketName} />
          <div className={styles.div1}>{product.marketName}</div>
        </div>
      </div>

      <div className={styles.productInfo}>
        <div className={styles.kg}>{product.productName}</div>
        <div className={styles.starParent}>
          <StarIcon />
          <div className={styles.div2}>0.0</div>
          <div className={styles.div2}>(0)</div>
        </div>
        <div className={styles.price}>
          {product.discount && <b className={styles.b}>{product.discount}%</b>}
          <b className={styles.b1}>{formatPrice(discountedPrice)}원</b>
        </div>
        {product.discount && <div className={styles.div4}>{formatPrice(firstOptionPrice)}원</div>}
      </div>

      <ProductDetailList product={product} />
    </div>
  );
};

const ProductDetailList = ({ product }) => (
  <div className={styles.listParent}>
    <div className={styles.list}>
      <div className={styles.div5}>농부</div>
      <div className={styles.cj}>{product.farmerName}</div>
    </div>
    <div className={styles.list}>
      <div className={styles.div5}>경력</div>
      <div className={styles.cj}>{product.career}</div>
    </div>
    <div className={styles.list}>
      <div className={styles.div5}>재배방식</div>
      <div className={styles.cj}>{product.cultivationMethod}</div>
    </div>
  </div>
);
