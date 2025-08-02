import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProductRegistrationPage.module.css';
import useProductStore from '../store/productStore';

// 아이콘
const ChevronLeftIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const CameraIcon = () => ( <svg width="32" height="32" viewBox="0 0 24 24"><path d="M4 8.25V6.75C4 5.64543 4.89543 4.75 6 4.75H8.5L10.5 2.75H13.5L15.5 4.75H18C19.1046 4.75 20 5.64543 20 6.75V8.25M4 8.25V17.25C4 18.3546 4.89543 19.25 6 19.25H18C19.1046 19.25 20 18.3546 20 17.25V8.25M4 8.25H20M12 16.25C13.6569 16.25 15 14.9069 15 13.25C15 11.5931 13.6569 10.25 12 10.25C10.3431 10.25 9 11.5931 9 13.25C9 14.9069 10.3431 16.25 12 16.25Z" stroke="#6a7685" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );

export default function ProductRegistrationPage() {
    const navigate = useNavigate();
    const { productName, category, mainImage, setData, setMainImage } = useProductStore();
    const categories = ['과일', '채소', '축산', '수산', '김치/젓갈', '쌀/잡곡'];

    const handleNext = () => {
        if (!category || !mainImage || !productName) {
            alert('상품 카테고리, 대표 이미지, 상품명은 필수 항목입니다.');
            return;
        }
        navigate('/register-product/detail');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Link to="/seller-market"><ChevronLeftIcon /></Link>
                <div className={styles.headerTitle}>상품 등록</div>
                <button onClick={handleNext} className={styles.nextButton}>다음</button>
            </div>
            <div className={styles.content}>
                <div className={styles.sectionTitle}>기본 정보 등록</div>
                <div className={styles.formGroup}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>상품 카테고리 <span className={styles.required}>*</span></label>
                        <div className={styles.dropdown}>
                            <select name="category" value={category} onChange={(e) => setData({ category: e.target.value })} className={styles.selectBox}>
                                <option value="" disabled>상품 카테고리를 선택해 주세요</option>
                                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>대표 이미지 <span className={styles.required}>*</span></label>
                        <label htmlFor="main-image-upload" className={styles.imgUpload}>
                            {mainImage ? (
                                <img src={mainImage} alt="대표 이미지 미리보기" className={styles.imagePreview} />
                            ) : (
                                <div className={styles.imgInfo}>
                                    <CameraIcon />
                                    <div>사진 올리기</div>
                                </div>
                            )}
                        </label>
                        <input id="main-image-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => setMainImage(e.target.files[0])} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>상품명 <span className={styles.required}>*</span></label>
                        <input className={styles.textInput} type="text" value={productName} onChange={(e) => setData({ productName: e.target.value })} placeholder="상품명을 입력해주세요" maxLength="30" />
                        <div className={styles.charCount}>{productName.length}/30자</div>
                    </div>
                </div>
            </div>
        </div>
    );
}