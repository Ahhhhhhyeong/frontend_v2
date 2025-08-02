import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductRegistrationConfirmation.module.css';

// 아이콘
const CheckCircleIcon = () => ( <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#15C47E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );

export default function ProductRegistrationConfirmation() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <CheckCircleIcon />
            <h1 className={styles.title}>상품 등록 완료!</h1>
            <p className={styles.message}>내 판매자 마켓에서 등록된 상품을 확인해보세요.</p>
            <button onClick={() => navigate('/seller-market')} className={styles.button}>
                확인
            </button>
        </div>
    );
}