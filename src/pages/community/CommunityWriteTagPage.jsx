/**
 * CommunityWriteTagPage.jsx
 * 글쓰기 3단계: 상품 태그 페이지
 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCommunityWriteStore from '../../store/communityWriteStore';
import styles from './CommunityWriteTagPage.module.css';

const ChevronLeftIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const CheckIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );

export default function CommunityWriteTagPage() {
    const navigate = useNavigate();
    const { taggedProducts, toggleProductTag } = useCommunityWriteStore();
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setMyProducts(storedProducts);
    }, []);

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <button onClick={() => navigate(-1)} className={styles.iconButton}><ChevronLeftIcon /></button>
                <h1 className={styles.headerTitle}>상품 태그</h1>
                {/* 4단계인 '등록 완료' 페이지로 이동하도록 수정 */}
                <button onClick={() => navigate('/community/write-confirm')} className={styles.nextButton}>완료</button>
            </header>
            <main className={styles.content}>
                {myProducts.length > 0 ? (
                    myProducts.map(product => {
                        const isTagged = taggedProducts.some(p => p.id === product.id);
                        return (
                            <div key={product.id} className={styles.productItem} onClick={() => toggleProductTag(product)}>
                                <img src={product.mainImage} alt={product.productName} className={styles.productImage} />
                                <div className={styles.productName}>{product.productName}</div>
                                <div className={isTagged ? styles.checkboxChecked : styles.checkbox}>
                                    {isTagged && <CheckIcon />}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className={styles.infoText}>태그할 수 있는 상품이 없습니다.</p>
                )}
            </main>
        </div>
    );
}