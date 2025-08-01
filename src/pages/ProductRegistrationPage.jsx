// src/pages/ProductRegistrationPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '../components/Icons';

const ArrowLeftIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>;

const categorySuggestions = {
    '딸기': ['과일', '농산물'],
    '감자': ['채소', '구황작물', '농산물'],
    '수박': ['과일', '여름과일'],
    '옥수수': ['채소', '농산물'],
    '사과': ['과일'],
};

export default function ProductRegistrationPage() {
    const navigate = useNavigate();
    const [productName, setProductName] = useState('');
    const [mainImage, setMainImage] = useState(null);
    const [suggestedCategories, setSuggestedCategories] = useState([]);

    useEffect(() => {
        const keyword = Object.keys(categorySuggestions).find(key => productName.includes(key));
        setSuggestedCategories(keyword ? categorySuggestions[keyword] : []);
    }, [productName]);

    const handleMainImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setMainImage(file);
        }
    };

    const handleNext = () => {
        if (!productName || !mainImage) {
            alert('상품 이름과 대표 이미지는 필수 항목입니다.');
            return;
        }

        const productData = {
            productName,
            mainImage: mainImage ? URL.createObjectURL(mainImage) : null,
        };
        // 다음 페이지로 데이터를 전달하면서 이동합니다.
        // 현재는 navigate의 state를 사용하며, 필요시 sessionStorage 등으로 변경 가능합니다.
        navigate('/register-product/detail', { state: productData });
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-3 border-b w-[375px] mx-auto">
                <Link to="/"><ArrowLeftIcon /></Link>
                <span className="font-bold text-lg">상품 등록</span>
                <button onClick={handleNext} className="font-bold text-lg text-green-500">다음</button>
            </div>

            <div className="p-4 space-y-6 max-w-2xl mx-auto w-[375px]">
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
            </div>
        </div>
    );
}