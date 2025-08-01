// src/pages/ProductRegistrationConfirmation.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircleIcon } from '../components/Icons';

export default function ProductRegistrationConfirmation() {
    const location = useLocation();
    const [productId, setProductId] = useState(null);

    useEffect(() => {
        // URL에서 상품 ID를 가져옵니다.
        const queryParams = new URLSearchParams(location.search);
        const id = queryParams.get('id');
        if (id) {
            setProductId(id);
        }
    }, [location]);

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
            <CheckCircleIcon className="w-24 h-24 text-green-500" />
            <h2 className="mt-6 text-2xl font-bold text-gray-900">상품 등록 완료!</h2>
            <p className="mt-2 text-center text-gray-600">
                상품이 성공적으로 등록되었습니다.<br />
                관리자 확인 후 판매가 시작됩니다.
            </p>
            {productId && (
                <Link to={`/product-detail/${productId}`} className="mt-4 px-8 py-3 bg-blue-500 rounded-lg text-white font-bold transition hover:bg-blue-600">
                    등록한 상품 확인하기
                </Link>
            )}
            <Link to="/" className="mt-4 px-8 py-3 bg-green-500 rounded-lg text-white font-bold transition hover:bg-green-600">
                메인 페이지로 돌아가기
            </Link>
        </div>
    );
}