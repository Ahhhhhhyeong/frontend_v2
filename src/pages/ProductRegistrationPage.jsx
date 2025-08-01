// src/pages/ProductRegistrationPage.jsx
// 사용자가 상품 정보를 입력하고 이미지를 등록할 수 있도록 돕는 상품 등록 페이지입니다.

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProductRegistrationPage.module.css';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronBottomIcon, CameraIcon } from '../components/Icons';

export default function ProductRegistrationPage() {
    const navigate = useNavigate();
    const [productName, setProductName] = useState('');
    const [mainImage, setMainImage] = useState(null);
    const [category, setCategory] = useState(''); // 선택된 카테고리를 저장하는 상태
    const [marketName, setMarketName] = useState('새벽들딸기농원');
    const [farmerName, setFarmerName] = useState('김준식');
    const [career, setCareer] = useState('');
    const [cultivation, setCultivation] = useState('');
    const [description, setDescription] = useState('');

    const categories = ['과일', '채소', '축산', '수산', '김치/젓갈', '쌀/잡곡'];

    const handleMainImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setMainImage(file);
        }
    };

    const handleNext = () => {
        // 모든 필수 항목이 채워졌는지 확인하는 로직 추가
        if (!productName || !mainImage || !category) {
            alert('상품 카테고리, 대표 이미지, 상품명은 필수 항목입니다.');
            return;
        }

        const productData = {
            productName,
            mainImage: mainImage ? URL.createObjectURL(mainImage) : null,
            category,
            marketName,
            farmerName,
            career,
            cultivation,
            description,
        };

        // 다음 페이지로 데이터를 전달하며 이동
        navigate('/register-product/detail', { state: productData });
    };

    return (
        <div className={styles.div}>
            {/* 상단 헤더 */}
            <div className={styles.header}>
                <Link to="/"><ChevronLeftIcon className={styles.chevronLeftIcon} /></Link>
                <div className={styles.div117}>상품 등록</div>
                <button onClick={handleNext} className={styles.div118}>다음</button>
            </div>

            <div className={styles.contentParent}>
                {/* 기본 정보 등록 섹션 */}
                <div className={styles.content}>
                    <div className={styles.div2}>기본 정보 등록</div>
                    <div className={styles.parent}>
                        {/* 상품 카테고리 선택 */}
                        <div className={styles.div3}>
                            <div className={styles.title}>
                                <div className={styles.div4}>상품 카테고리를 선택해 주세요</div>
                                <div className={styles.div5}>*</div>
                            </div>
                            <div className={styles.textInput}>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className={styles.selectInput}
                                >
                                    <option value="" disabled>상품 카테고리를 선택해 주세요</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                                <ChevronBottomIcon className={styles.chevronBottomIcon} />
                            </div>
                        </div>
                        {/* 대표 이미지 등록 */}
                        <div className={styles.div3}>
                            <div className={styles.title}>
                                <div className={styles.div4}>대표 이미지를 올려주세요</div>
                                <div className={styles.div5}>*</div>
                            </div>
                            <div className={styles.tip}>
                                <div className={styles.title2}>
                                    <div className={styles.chip}>
                                        <div className={styles.div12}>추천</div>
                                    </div>
                                    <div className={styles.div13}>이런 사진이 좋아요!</div>
                                </div>
                                <div className={styles.gapContainer}>
                                    <ul className={styles.ul}>
                                        <li>저화질, 초점이 나간 이미지는 피해주세요</li>
                                        <li>상품을 잘 나타내는 직관적인 이미지를 선택해주세요</li>
                                        <li>배경은 너무 어둡지 않게 촬영해주세요</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.imgUpload}>
                                {mainImage ? (
                                    <img src={URL.createObjectURL(mainImage)} alt="대표 이미지" className={styles.imgUploadChild} />
                                ) : (
                                    <>
                                        <div className={styles.imgUploadChild} />
                                        <div className={styles.imgInfo}>
                                            <CameraIcon className={styles.bxscameraIcon} />
                                            <div className={styles.div16}>사진 올리기</div>
                                            <div className={styles.div17}>대표사진을 올려주세요</div>
                                        </div>
                                    </>
                                )}
                                <input type="file" accept="image/*" className={styles.fileInput} onChange={handleMainImageChange} />
                            </div>
                        </div>
                        {/* 상품명 작성 */}
                        <div className={styles.div3}>
                            <div className={styles.title}>
                                <div className={styles.div4}>상품명을 작성해주세요</div>
                                <div className={styles.div5}>*</div>
                            </div>
                            <div className={styles.tip1}>
                                <div className={styles.title2}>
                                    <div className={styles.chip}>
                                        <div className={styles.div12}>추천</div>
                                    </div>
                                    <div className={styles.div13}>이런 이름이 좋아요!</div>
                                </div>
                                <div className={styles.gapContainer}>
                                    <ul className={styles.ul}>
                                        <li>식품 인증을 강조한 이름 예) GAP 인증</li>
                                        <li>지역, 제철을 강조한 이름 예) 경북 햇 사과, 부서 꿀사과</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.textInputParent}>
                                <input
                                    className={styles.textInput1}
                                    type="text"
                                    placeholder="상품명을 입력해주세요"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    maxLength={20}
                                />
                                <div className={styles.group}>
                                    <div className={styles.div25}>{productName.length}</div>
                                    <div className={styles.div15}>/20자</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 상세 정보 등록 섹션 */}
                <div className={styles.content}>
                    <div className={styles.div2}>상세 정보 등록</div>
                    <div className={styles.div54}>
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
                    </div>
                </div>
            </div>

            {/* 하단 버튼 */}
            <div className={styles.bottomButton}>
                <button onClick={handleNext} className={styles.button}>
                    <div className={styles.div1}>다음</div>
                </button>
            </div>
        </div>
    );
}