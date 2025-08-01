// src/pages/ProductRegistrationPage.jsx
// 사용자가 상품 정보를 입력하고 이미지를 등록할 수 있도록 돕는 상품 등록 페이지입니다.

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '../components/Icons'; // 상품 등록 완료 페이지에서 사용할 아이콘

// --- 아이콘 컴포넌트 ---
const ArrowLeftIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>;

// --- 자동 완성 및 템플릿 데이터 ---
const categorySuggestions = {
    '딸기': ['과일', '농산물'],
    '감자': ['채소', '구황작물', '농산물'],
    '수박': ['과일', '여름과일'],
    '옥수수': ['채소', '농산물'],
    '사과': ['과일'],
};

const descriptionTemplates = [
    "GAP 인증을 받은 안전한 농산물입니다.",
    "화학 비료 대신 유기농 퇴비를 사용하여 정성껏 키웠습니다.",
    "당일 수확하여 가장 신선한 상태로 보내드립니다.",
    "산지 직송으로 유통 과정을 최소화했습니다.",
    "꼼꼼하게 선별하여 최상품만 보내드립니다.",
];

// --- 컴포넌트 ---
export default function ProductRegistrationPage() {
    const navigate = useNavigate();
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [suggestedCategories, setSuggestedCategories] = useState([]);
    const [mainImage, setMainImage] = useState(null); // 대표 이미지 파일 상태
    const [detailImages, setDetailImages] = useState([]); // 상세 이미지 파일 배열 상태

    useEffect(() => {
        // 상품 이름에 따라 추천 카테고리 업데이트
        const keyword = Object.keys(categorySuggestions).find(key => productName.includes(key));
        setSuggestedCategories(keyword ? categorySuggestions[keyword] : []);
    }, [productName]);

    const addDescriptionTemplate = (template) => {
        // 상품 설명 템플릿 추가
        setDescription(prev => prev ? `${prev}\n${template}` : template);
    };

    const handleMainImageChange = (event) => {
        // 대표 이미지 파일 선택 시 상태 업데이트
        const file = event.target.files[0];
        if (file) {
            setMainImage(file);
        }
    };

    const handleDetailImageChange = (event) => {
        // 상세 이미지 파일 선택 시 상태 업데이트 (다중 선택 가능)
        const files = Array.from(event.target.files);
        if (files && detailImages.length + files.length <= 4) {
            setDetailImages(prevImages => [...prevImages, ...files]);
        } else if (detailImages.length + files.length > 4) {
            alert('상세 이미지는 최대 4장까지 등록 가능합니다.');
        }
    };

    const handleSubmit = () => {
        // '완료' 버튼 클릭 시 상품 정보와 이미지 정보를 콘솔에 출력 (실제 등록 로직은 API 호출 등을 통해 구현)
        console.log('상품 등록 요청:', {
            productName,
            description,
            mainImage: mainImage ? mainImage.name : null,
            detailImages: detailImages.map(file => file.name),
        });
        // 실제 API 호출 후 성공하면 다음 페이지로 이동 (현재는 콘솔 출력만)
        navigate('/product-registration-confirmation');
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* 상단 헤더 */}
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-3 border-b w-[375px] mx-auto">
                <Link to="/"><ArrowLeftIcon /></Link>
                <span className="font-bold text-lg">상품 등록</span>
                <button onClick={handleSubmit} className="font-bold text-lg text-green-500">완료</button>
            </div>

            <div className="p-4 space-y-6 max-w-2xl mx-auto w-[375px]">
                {/* 상품명 입력 섹션 */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <label className="text-sm font-semibold text-gray-700">상품 이름</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="예) 강원도 유기농 감자"
                        className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {suggestedCategories.length > 0 && (
                        <div className="mt-3">
                            <p className="text-xs text-gray-500 mb-2">추천 카테고리</p>
                            <div className="flex flex-wrap gap-2">
                                {suggestedCategories.map(cat => (
                                    <button key={cat} className="flex items-center space-x-1 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                                        <CheckCircleIcon className="w-5 h-5" />
                                        <span>{cat}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* 대표 이미지 등록 섹션 */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <label className="text-sm font-semibold text-gray-700">대표 이미지 등록</label>
                    <div className="w-full h-48 mt-2 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 cursor-pointer relative">
                        {mainImage ? (
                            <img src={URL.createObjectURL(mainImage)} alt="대표 이미지 미리보기" className="w-full h-full object-cover rounded-md" />
                        ) : (
                            <>
                                <span className="text-lg">+</span>
                                <input type="file" accept="image/*" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" onChange={handleMainImageChange} />
                            </>
                        )}
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                        TIP 이런 사진이 좋아요!
                        <br/>
                        가로가 긴 3:2 비율의 이미지, 주목도가 높은 선명한 이미지, 제공할 상품과 연관된 이미지
                    </p>
                </div>

                {/* 상품 설명 입력 섹션 */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <label className="text-sm font-semibold text-gray-700">상품 설명</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="상품에 대한 이야기를 들려주세요."
                        className="w-full h-32 mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-2">자주 쓰는 문구를 추가해보세요!</p>
                        <div className="flex flex-wrap gap-2">
                            {descriptionTemplates.map((template, index) => (
                                <button
                                    key={index}
                                    onClick={() => addDescriptionTemplate(template)}
                                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md hover:bg-gray-200"
                                >
                                    + {template}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 상세 정보 입력 (이미지 추가 기능) */}
                <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">상세 정보 등록 (최대 4장)</h4>
                    <div className="w-full h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 cursor-pointer relative">
                        <span className="text-lg">+ 상세 이미지 추가</span>
                        <input type="file" accept="image/*" multiple className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" onChange={handleDetailImageChange} />
                    </div>
                    {detailImages.length > 0 && (
                        <div className="grid grid-cols-2 gap-2">
                            {detailImages.map((image, index) => (
                                <div key={index} className="relative">
                                    <img src={URL.createObjectURL(image)} alt={`상세 이미지 ${index + 1}`} className="w-full h-32 object-cover rounded-md" />
                                    {/* 필요하다면 삭제 버튼 추가 */}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}