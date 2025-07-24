// src/pages/ProductRegistrationPage.jsx
// '미리캔버스'처럼 사용자가 쉽게 상품 정보를 입력하도록 돕는 상품 등록 페이지입니다.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 페이지 이동을 위해 Link를 사용합니다.

// --- 아이콘 컴포넌트들 ---
const ArrowLeftIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>;
const CheckCircleIcon = () => <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>;

// --- 자동 완성 및 템플릿 데이터 ---
// 상품명에 따른 추천 카테고리 데이터
const categorySuggestions = {
    '딸기': ['과일', '농산물'],
    '감자': ['채소', '구황작물', '농산물'],
    '수박': ['과일', '여름과일'],
    '옥수수': ['채소', '농산물'],
    '사과': ['과일'],
};

// 상품 설명 자동 완성을 위한 템플릿 문구
const descriptionTemplates = [
    "GAP 인증을 받은 안전한 농산물입니다.",
    "화학 비료 대신 유기농 퇴비를 사용하여 정성껏 키웠습니다.",
    "당일 수확하여 가장 신선한 상태로 보내드립니다.",
    "산지 직송으로 유통 과정을 최소화했습니다.",
    "꼼꼼하게 선별하여 최상품만 보내드립니다.",
];

// --- 컴포넌트 ---
export default function ProductRegistrationPage() {
    // 상품명, 설명, 추천 카테고리 등의 상태를 관리합니다.
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [suggestedCategories, setSuggestedCategories] = useState([]);

    // productName이 변경될 때마다 추천 카테고리를 업데이트합니다.
    useEffect(() => {
        // 상품 이름에 포함된 키워드를 찾습니다.
        const keyword = Object.keys(categorySuggestions).find(key => productName.includes(key));
        // 키워드가 있다면 추천 카테고리를 설정하고, 없다면 비웁니다.
        setSuggestedCategories(keyword ? categorySuggestions[keyword] : []);
    }, [productName]);

    // 설명 템플릿을 클릭했을 때, 기존 설명에 문구를 추가하는 함수입니다.
    const addDescriptionTemplate = (template) => {
        setDescription(prev => prev ? `${prev}\n${template}` : template);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* 상단 헤더 */}
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-3 border-b max-w-2xl mx-auto w-full">
                <Link to="/"><ArrowLeftIcon /></Link>
                <span className="font-bold text-lg">상품 등록</span>
                {/* '완료' 버튼을 누르면 메인 페이지로 이동합니다. (실제 저장 로직은 추후 추가) */}
                <Link to="/" className="font-bold text-lg text-green-500">완료</Link>
            </div>

            <div className="p-4 space-y-6 max-w-2xl mx-auto">
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
                    {/* 추천 카테고리가 있을 때만 표시됩니다. */}
                    {suggestedCategories.length > 0 && (
                        <div className="mt-3">
                            <p className="text-xs text-gray-500 mb-2">추천 카테고리</p>
                            <div className="flex flex-wrap gap-2">
                                {suggestedCategories.map(cat => (
                                    <button key={cat} className="flex items-center space-x-1 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                                        <CheckCircleIcon />
                                        <span>{cat}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
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
                    {/* 설명 템플릿 */}
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
            </div>
        </div>
    );
}