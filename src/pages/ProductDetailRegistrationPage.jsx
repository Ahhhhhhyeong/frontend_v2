import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProductDetailRegistrationPage.module.css';
import useProductStore from '../store/productStore';

// 아이콘
const ChevronLeftIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const CameraIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 8.25V6.75C4 5.64543 4.89543 4.75 6 4.75H8.5L10.5 2.75H13.5L15.5 4.75H18C19.1046 4.75 20 5.64543 20 6.75V8.25M4 8.25V17.25C4 18.3546 4.89543 19.25 6 19.25H18C19.1046 19.25 20 18.3546 20 17.25V8.25M4 8.25H20M12 16.25C13.6569 16.25 15 14.9069 15 13.25C15 11.5931 13.6569 10.25 12 10.25C10.3431 10.25 9 11.5931 9 13.25C9 14.9069 10.3431 16.25 12 16.25Z" stroke="#6a7685" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const TrashIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24"><path d="M4 7H20M10 11V17M14 11V17M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7" stroke="#6a7685" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const PlusIcon = () => ( <svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );

const DetailSection = ({ index, title: sectionTitle }) => {
    const { details, setDetailField, setDetailImage } = useProductStore();
    const detail = details[index];
    const handleUseExample = (field) => setDetailField(index, field, detail.placeholder[field]);

    return (
        <div className={styles.detailSection}>
             <label className={styles.sectionLabel}>{sectionTitle} <span className={styles.required}>*</span></label>
             <label htmlFor={`detail-image-${index}`} className={styles.imgUpload}>
                 {detail.image ? <img src={detail.image} alt="상세 이미지" className={styles.imagePreview} /> : <CameraIcon />}
             </label>
             <input id={`detail-image-${index}`} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => setDetailImage(index, e.target.files[0])} />
             <div className={styles.inputGroup}>
                <div className={styles.inputHeader}><label className={styles.label}>제목</label><button onClick={() => handleUseExample('title')} className={styles.exampleButton}>예시 사용</button></div>
                <input type="text" className={styles.textInput} value={detail.title} onChange={(e) => setDetailField(index, 'title', e.target.value)} placeholder={detail.placeholder.title} maxLength="30" />
             </div>
             <div className={styles.inputGroup}>
                <div className={styles.inputHeader}><label className={styles.label}>내용</label><button onClick={() => handleUseExample('content')} className={styles.exampleButton}>예시 사용</button></div>
                <textarea className={styles.textarea} value={detail.content} onChange={(e) => setDetailField(index, 'content', e.target.value)} placeholder={detail.placeholder.content} maxLength="80" />
             </div>
        </div>
    );
};

export default function ProductDetailRegistrationPage() {
    const navigate = useNavigate();
    const { options, discount, setData, addOption, updateOption, removeOption, reset, ...productData } = useProductStore();

    const handleRegister = () => {
        if (options.some(opt => !opt.name || !opt.value || !opt.price)) {
            alert('모든 옵션 필드를 입력해주세요.'); return;
        }
        const newProduct = { ...productData, options, discount, id: Date.now() };
        const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
        existingProducts.unshift(newProduct);
        localStorage.setItem('products', JSON.stringify(existingProducts));
        reset();
        navigate(`/product-registration-confirmation`);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Link to="/register-product"><ChevronLeftIcon /></Link>
                <div className={styles.headerTitle}>상품 등록</div>
                <Link to="/product-detail/preview" className={styles.previewButton}>미리보기</Link>
            </div>
            <div className={styles.content}>
                <div className={styles.sectionTitle}>상세 정보 등록</div>
                <DetailSection index={0} title="재배 환경 소개" />
                <DetailSection index={1} title="재배 방식/철학" />
                <DetailSection index={2} title="선별 및 관리 방식" />
                <DetailSection index={3} title="포장 및 배송 안내" />
                <div className={styles.optionSection}>
                    <div className={styles.sectionTitle}>옵션 및 가격</div>
                    {options.map((option, index) => (
                        <div key={index} className={styles.optionGroup}>
                            <div className={styles.optionHeader}><div>옵션 {index + 1}</div>{options.length > 1 && <button onClick={() => removeOption(index)}><TrashIcon /></button>}</div>
                            <input className={styles.optionInput} type="text" placeholder="옵션명 (예: 무게)" value={option.name} onChange={e => updateOption(index, 'name', e.target.value)} />
                            <input className={styles.optionInput} type="text" placeholder="옵션값 (예: 1kg)" value={option.value} onChange={e => updateOption(index, 'value', e.target.value)} />
                            <input className={styles.optionInput} type="number" placeholder="옵션 가격 (원)" value={option.price} onChange={e => updateOption(index, 'price', e.target.value)} />
                        </div>
                    ))}
                    <button onClick={addOption} className={styles.addButton}><PlusIcon/> 옵션 추가</button>
                </div>
                <div className={styles.optionSection}>
                    <div className={styles.sectionTitle}>할인 설정</div>
                    <div className={styles.optionGroup}>
                        <label className={styles.label}>기본 할인율 (%)</label>
                        <input className={styles.optionInput} type="number" placeholder="할인율을 숫자로 입력 (예: 20)" value={discount} onChange={(e) => setData({ discount: e.target.value })} />
                    </div>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <button onClick={handleRegister} className={styles.registerButton}>등록하기</button>
            </div>
        </div>
    );
}