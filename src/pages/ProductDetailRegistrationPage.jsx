// src/pages/ProductDetailRegistrationPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './ProductDetailRegistrationPage.module.css';
import { ChevronLeftIcon, CameraIcon, TrashIcon } from '../components/Icons';

// 파일(이미지)을 Base64 문자열로 변환하는 헬퍼 함수
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export default function ProductDetailRegistrationPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const initialProductData = location.state || {};

    const [description, setDescription] = useState('');
    const [detailImages, setDetailImages] = useState([]);
    const [options, setOptions] = useState([{ name: '', value: '', price: '' }]);
    // --- ✨ 1. 할인율 상태 추가 ---
    const [discount, setDiscount] = useState('');

    const handleDetailImageChange = async (event) => {
        const files = Array.from(event.target.files);
        if (files.length > 0 && detailImages.length + files.length <= 4) {
            const base64Images = await Promise.all(files.map(file => toBase64(file)));
            setDetailImages(prevImages => [...prevImages, ...base64Images]);
        } else if (detailImages.length + files.length > 4) {
            alert('상세 이미지는 최대 4장까지 등록 가능합니다.');
        }
    };
    
    // ... (옵션 핸들러 함수들은 이전과 동일)
    const handleAddOption = () => {
        if (options.length < 10) setOptions([...options, { name: '', value: '', price: '' }]);
    };
    const handleOptionChange = (index, field, value) => {
        const newOptions = [...options];
        newOptions[index][field] = value;
        setOptions(newOptions);
    };
    const handleRemoveOption = (index) => {
        setOptions(options.filter((_, i) => i !== index));
    };

    const handleSubmit = async () => {
        const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

        const productData = {
            id: Date.now(),
            ...initialProductData,
            description,
            detailImages,
            options,
            // --- ✨ 2. 할인율 데이터 추가 ---
            discount: discount || 0, // 입력값이 없으면 0으로 저장
            // 예시 데이터
            marketName: initialProductData.marketName || "FarmUs 농장",
            rating: "5.0",
            reviews: "999+",
        };

        // 최신 상품이 배열의 맨 앞에 오도록 unshift 사용
        existingProducts.unshift(productData);
        localStorage.setItem('products', JSON.stringify(existingProducts));

        navigate(`/product-registration-confirmation?id=${productData.id}`);
    };
    
    return (
        <div className={styles.div}>
            <div className={styles.header}>
                <Link to="/register-product"><ChevronLeftIcon /></Link>
                <div className={styles.div117}>상품 등록</div>
                <button onClick={handleSubmit} className={styles.div118}>등록하기</button>
            </div>

            <div className={styles.contentParent}>
                {/* ... (상세 설명, 상세 이미지 등록 부분은 이전과 동일) */}
                <div className={styles.content}>
                    {/* ... */}
                </div>
                
                <div className={styles.content}>
                    <div className={styles.div2}>가격 및 할인 설정</div>
                     {/* --- ✨ 3. 할인율 입력 필드 추가 --- */}
                     <div className={styles.parent}>
                        <div className={styles.optionItem}>
                           <div className={styles.title12}>
                                 <div className={styles.div72}>할인율 (%)</div>
                           </div>
                           <input
                                 type="number"
                                 placeholder="할인율을 숫자로 입력 (예: 17)"
                                 value={discount}
                                 onChange={(e) => setDiscount(e.target.value)}
                                 className={styles.textInput1}
                           />
                        </div>
                     </div>
                    <div className={styles.div2} style={{ marginTop: '20px' }}>옵션 설정</div>
                    <div className={styles.parent}>
                        {options.map((option, index) => (
                            <div key={index} className={styles.optionItem}>
                                <div className={styles.title12}>
                                    <div className={styles.div72}>옵션 {index + 1}</div>
                                    <button onClick={() => handleRemoveOption(index)}>
                                        <TrashIcon className="w-5 h-5 text-gray-500" />
                                    </button>
                                </div>
                                <div className={styles.optionFields}>
                                    <input type="text" placeholder="옵션명 (예: 무게, 개수)" value={option.name} onChange={(e) => handleOptionChange(index, 'name', e.target.value)} className={styles.textInput1} />
                                    <input type="text" placeholder="옵션값 (예: 1kg, 3개입)" value={option.value} onChange={(e) => handleOptionChange(index, 'value', e.target.value)} className={styles.textInput1} />
                                    <input type="number" placeholder="가격 (예: 15000)" value={option.price} onChange={(e) => handleOptionChange(index, 'price', e.target.value)} className={styles.textInput1} />
                                </div>
                            </div>
                        ))}
                        <button onClick={handleAddOption} className="text-green-500 font-semibold py-2">옵션 추가하기</button>
                    </div>
                </div>
            </div>

            <div className={styles.bottomButton}>
                 {/* 미리보기 버튼은 현재 상태에서는 제거하거나 기능을 수정해야 합니다. */}
                <button onClick={handleSubmit} className={styles.registerButton} style={{width: '100%'}}>등록하기</button>
            </div>
        </div>
    );
}