// src/pages/ProductRegistrationConfirmation.jsx
// 상품 등록 완료를 확인하는 페이지입니다.

import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '../components/Icons';

export default function ProductRegistrationConfirmation() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
            <CheckCircleIcon className="w-24 h-24 text-green-500" />
            <h2 className="mt-6 text-2xl font-bold text-gray-900">상품 등록 완료!</h2>
            <p className="mt-2 text-center text-gray-600">
                상품이 성공적으로 등록되었습니다.<br />
                관리자 확인 후 판매가 시작됩니다.
            </p>
            <Link to="/" className="mt-8 px-8 py-3 bg-green-500 rounded-lg text-white font-bold transition hover:bg-green-600">
                메인 페이지로 돌아가기
            </Link>
        </div>
    );
}