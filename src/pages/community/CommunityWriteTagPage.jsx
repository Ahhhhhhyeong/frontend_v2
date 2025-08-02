// src/pages/community/CommunityWriteTagPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCommunityWriteStore from '../../store/communityWriteStore';
import styles from './CommunityWriteTagPage.module.css';

// 아이콘 컴포넌트 (기존과 동일)
const ChevronLeftIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const CheckIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );

export default function CommunityWriteTagPage() {
    const navigate = useNavigate();
    
    // ✨ [수정] images 상태를 구독하도록 추가합니다.
    // 이제 이미지 목록이 변경되면 이 컴포넌트가 자동으로 업데이트됩니다.
    const { images, taggedProducts, toggleProductTag } = useCommunityWriteStore();
    
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        // 로컬 스토리지에서 등록된 상품 목록을 불러옵니다.
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setMyProducts(storedProducts);
    }, []);

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <button onClick={() => navigate(-1)} className={styles.iconButton}><ChevronLeftIcon /></button>
                <h1 className={styles.headerTitle}>상품 태그</h1>
                <button onClick={() => navigate('/community/write-confirm')} className={styles.nextButton}>완료</button>
            </header>

            <main className={styles.content}>
                {/* ✨ [추가] 업로드된 이미지를 보여주는 영역 */}
                <div className={styles.imagePreviewSection}>
                    <p className={styles.infoText}>태그를 추가할 이미지를 확인하세요.</p>
                    <div className={styles.imageScrollContainer}>
                        {images.length > 0 ? (
                            images.map((imageSrc, index) => (
                                <img key={index} src={imageSrc} alt={`업로드 이미지 ${index + 1}`} className={styles.previewImage} />
                            ))
                        ) : (
                            <div className={styles.noImage}>업로드된 이미지가 없습니다.</div>
                        )}
                    </div>
                </div>

                <hr className={styles.divider} />

                {/* 상품 선택 영역 */}
                <div className={styles.productSelectionSection}>
                     <p className={styles.infoText}>이미지와 함께 보여줄 상품을 선택해주세요.</p>
                    {myProducts.length > 0 ? (
                        myProducts.map(product => {
                            const isTagged = taggedProducts.some(p => p.id === product.id);
                            return (
                                <div key={product.id} className={styles.productItem} onClick={() => toggleProductTag(product)}>
                                    <img src={product.mainImage} alt={product.productName} className={styles.productImage} />
                                    <div className={styles.productInfo}>
                                        <div className={styles.productBrand}>{product.farmName || '팜어스 농장'}</div>
                                        <div className={styles.productName}>{product.productName}</div>
                                    </div>
                                    <div className={isTagged ? styles.checkboxChecked : styles.checkbox}>
                                        {isTagged && <CheckIcon />}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className={styles.infoText}>태그할 수 있는 상품이 없습니다.</p>
                    )}
                </div>
            </main>
        </div>
    );
}