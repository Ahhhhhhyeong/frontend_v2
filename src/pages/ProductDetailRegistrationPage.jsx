// src/pages/ProductDetailRegistrationPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CheckCircleIcon } from '../components/Icons';

const ArrowLeftIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>;

const descriptionTemplates = [
    "GAP 인증을 받은 안전한 농산물입니다.",
    "화학 비료 대신 유기농 퇴비를 사용하여 정성껏 키웠습니다.",
    "당일 수확하여 가장 신선한 상태로 보내드립니다.",
    "산지 직송으로 유통 과정을 최소화했습니다.",
    "꼼꼼하게 선별하여 최상품만 보내드립니다.",
];

export default function ProductDetailRegistrationPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { productName, mainImage } = location.state || {};

    const [description, setDescription] = useState('');
    const [detailImages, setDetailImages] = useState([]);
    const [price, setPrice] = useState('');

    const addDescriptionTemplate = (template) => {
        setDescription(prev => prev ? `${prev}\n${template}` : template);
    };

    const handleDetailImageChange = (event) => {
        const files = Array.from(event.target.files);
        if (files && detailImages.length + files.length <= 4) {
            setDetailImages(prevImages => [...prevImages, ...files]);
        } else if (detailImages.length + files.length > 4) {
            alert('상세 이미지는 최대 4장까지 등록 가능합니다.');
        }
    };

    const handlePreview = () => {
        const productData = {
            productName,
            mainImage,
            description,
            detailImages: detailImages.map(file => URL.createObjectURL(file)),
            price: price,
            // 기타 정보 (예시)
            brandName: "농부 이름 (예시)",
        };
        // 미리보기 페이지로 데이터를 전달하며 이동
        navigate('/product-detail/preview', { state: productData });
    };

    const handleSubmit = () => {
        if (!description || detailImages.length === 0 || !price) {
            alert('상품 설명, 상세 이미지, 가격은 필수 항목입니다.');
            return;
        }
        
        // 상품 ID를 생성합니다.
        const newProductId = Date.now();
        // 등록된 상품 데이터를 세션 스토리지에 저장합니다.
        sessionStorage.setItem(
            `product-${newProductId}`,
            JSON.stringify({
                id: newProductId,
                productName,
                mainImage,
                description,
                detailImages: detailImages.map(file => URL.createObjectURL(file)),
                price: price,
                // 기타 정보 (예시)
                brandName: "김준식 농부",
            })
        );
        // 등록 완료 페이지로 이동
        navigate(`/product-registration-confirmation?id=${newProductId}`);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-3 border-b w-[375px] mx-auto">
                <Link to="/register-product"><ArrowLeftIcon /></Link>
                <span className="font-bold text-lg">상품 등록</span>
                <button onClick={handleSubmit} className="font-bold text-lg text-green-500">완료</button>
            </div>

            <div className="p-4 space-y-6 max-w-2xl mx-auto w-[375px]">
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
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <label className="text-sm font-semibold text-gray-700">상세 이미지 등록 (최대 4장)</label>
                    <div className="w-full h-24 mt-2 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 cursor-pointer relative">
                        <span className="text-lg">+ 상세 이미지 추가</span>
                        <input type="file" accept="image/*" multiple className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" onChange={handleDetailImageChange} />
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
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <label className="text-sm font-semibold text-gray-700">가격</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="판매 가격을 입력해주세요."
                        className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                    <button onClick={handlePreview} className="text-blue-500 font-bold">상품 미리보기</button>
                    <button onClick={handleSubmit} className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600">등록 완료</button>
                </div>
            </div>
        </div>
    );
}