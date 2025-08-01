// src/pages/ProductDetailRegistrationPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './ProductDetailRegistrationPage.module.css';
import { ChevronLeftIcon, ChevronBottomIcon, CameraIcon, TrashIcon } from '../components/Icons';

export default function ProductDetailRegistrationPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const initialProductData = location.state || {};

    // 상태 관리
    const [description, setDescription] = useState('');
    const [detailImages, setDetailImages] = useState([]);
    const [options, setOptions] = useState([{ name: '', value: '', price: '' }]);

    const handleDetailImageChange = (event) => {
        const files = Array.from(event.target.files);
        if (files && detailImages.length + files.length <= 4) {
            setDetailImages(prevImages => [...prevImages, ...files]);
        } else if (detailImages.length + files.length > 4) {
            alert('상세 이미지는 최대 4장까지 등록 가능합니다.');
        }
    };

    const handleAddOption = () => {
        if (options.length < 10) {
            setOptions([...options, { name: '', value: '', price: '' }]);
        }
    };

    const handleOptionChange = (index, field, value) => {
        const newOptions = [...options];
        newOptions[index][field] = value;
        setOptions(newOptions);
    };

    const handleRemoveOption = (index) => {
        const newOptions = options.filter((_, i) => i !== index);
        setOptions(newOptions);
    };

    const handlePreview = () => {
        const productData = {
            ...initialProductData,
            description,
            detailImages: detailImages.map(file => URL.createObjectURL(file)),
            options,
            // 임시 데이터 추가
            brandName: "새벽들딸기농원",
            rating: "5.0",
            reviews: "999+",
        };
        // 미리보기 페이지로 데이터를 전달하며 이동
        navigate('/product-detail/preview', { state: productData });
    };

    const handleSubmit = () => {
        const newProductId = Date.now();
        const productData = {
            ...initialProductData,
            description,
            detailImages: detailImages.map(file => URL.createObjectURL(file)),
            options,
            // 임시 데이터 추가
            brandName: "새벽들딸기농원",
            rating: "5.0",
            reviews: "999+",
        };
        sessionStorage.setItem(`product-${newProductId}`, JSON.stringify(productData));
        navigate(`/product-registration-confirmation?id=${newProductId}`);
    };

    return (
        <div className={styles.div}>
            <div className={styles.header}>
                <Link to="/register-product"><ChevronLeftIcon className={styles.chevronLeftIcon} /></Link>
                <div className={styles.div117}>상품 등록</div>
                <button onClick={handleSubmit} className={styles.div118}>등록하기</button>
            </div>

            <div className={styles.contentParent}>
                <div className={styles.content}>
                    <div className={styles.div2}>상세 정보 등록</div>
                    <div className={styles.parent}>
                        <div className={styles.div3}>
                            <div className={styles.title}>
                                <div className={styles.div4}>상품 상세 설명을 적어주세요</div>
                                <div className={styles.div5}>*</div>
                            </div>
                            <div className={styles.tip1}>
                                <div className={styles.title10}>
                                    <div className={styles.chip}>
                                        <div className={styles.div12}>추천</div>
                                    </div>
                                    <div className={styles.div13}>아래 내용을 포함해 주세요!</div>
                                </div>
                                <div className={styles.div60}>
                                    <ul className={styles.ul}>
                                        <li>소비자들이 자주 묻는 질문은 어떤게 있나요?</li>
                                        <li>배송 정보는 어떻게 되나요?</li>
                                        <li>상품을 더 맛있게 먹는 방법이 있나요?</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.textCount}>
                                <textarea
                                    className={styles.textarea}
                                    placeholder="상품에 대한 이야기를 들려주세요."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    maxLength={500}
                                />
                                <div className={styles.count}>
                                    <div className={styles.div25}>{description.length}</div>
                                    <div className={styles.div15}>/500자</div>
                                </div>
                            </div>
                        </div>
                        {/* 상세 이미지 등록 */}
                        <div className={styles.div3}>
                            <div className={styles.title}>
                                <div className={styles.div4}>상세 이미지를 올려주세요</div>
                                <div className={styles.div5}>*</div>
                            </div>
                            <div className={styles.tip1}>
                                <div className={styles.title10}>
                                    <div className={styles.chip}>
                                        <div className={styles.div12}>추천</div>
                                    </div>
                                    <div className={styles.div13}>이런 사진이 좋아요!</div>
                                </div>
                                <div className={styles.div60}>
                                    <ul className={styles.ul}>
                                        <li>상품을 더 자세히 보여주는 다양한 각도의 사진</li>
                                        <li>상품의 특징을 강조하는 확대 사진</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.imgUpload}>
                                <div className={styles.imgUploadChild} />
                                <div className={styles.imgInfo}>
                                    <CameraIcon className={styles.bxscameraIcon} />
                                    <div className={styles.div16}>사진 올리기</div>
                                    <div className={styles.div17}>{detailImages.length}장 / 최대 4장</div>
                                </div>
                                <input type="file" accept="image/*" multiple className={styles.fileInput} onChange={handleDetailImageChange} />
                            </div>
                            {detailImages.length > 0 && (
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    {detailImages.map((image, index) => (
                                        <div key={index} className="relative">
                                            <img src={URL.createObjectURL(image)} alt={`상세 이미지 ${index + 1}`} className="w-full h-32 object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.div2}>옵션 설정</div>
                    <div className={styles.parent}>
                        {options.map((option, index) => (
                            <div key={index} className={styles.optionItem}>
                                <div className={styles.title12}>
                                    <div className={styles.div72}>옵션 {index + 1}</div>
                                    <button onClick={() => handleRemoveOption(index)}>
                                        <TrashIcon className={styles.chevronBottomIcon} />
                                    </button>
                                </div>
                                <div className={styles.optionFields}>
                                    <input
                                        type="text"
                                        placeholder="옵션명 (예: 무게, 개수)"
                                        value={option.name}
                                        onChange={(e) => handleOptionChange(index, 'name', e.target.value)}
                                        className={styles.textInput1}
                                    />
                                    <input
                                        type="text"
                                        placeholder="옵션값 (예: 1kg, 3개입)"
                                        value={option.value}
                                        onChange={(e) => handleOptionChange(index, 'value', e.target.value)}
                                        className={styles.textInput1}
                                    />
                                    <input
                                        type="number"
                                        placeholder="가격 (예: 15000)"
                                        value={option.price}
                                        onChange={(e) => handleOptionChange(index, 'price', e.target.value)}
                                        className={styles.textInput1}
                                    />
                                </div>
                            </div>
                        ))}
                        <button onClick={handleAddOption} className={styles.iconButton}>
                            <div className={styles.div116}>옵션 추가하기</div>
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.bottomButton}>
                <button onClick={handlePreview} className={styles.previewButton}>
                    <div className={styles.div116}>미리보기</div>
                </button>
                <button onClick={handleSubmit} className={styles.registerButton}>
                    <div className={styles.div116}>등록하기</div>
                </button>
            </div>
        </div>
    );
}