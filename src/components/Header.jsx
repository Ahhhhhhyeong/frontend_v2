// src/components/Header.jsx
// 모든 페이지 상단에 공통으로 표시될 헤더 컴포넌트입니다.

import React from 'react';

// 아이콘들을 외부 파일 대신 컴포넌트 내부에 직접 정의하여 경로 문제를 원천적으로 방지합니다.
const LogoIcon = () => (
    <svg width="86" height="24" viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="24" fill="black" fontWeight="bold">Farm:Us</text>
    </svg>
);
const ShoppingCartIcon = () => (
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
);
const UserIcon = () => (
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);

export default function Header() {
    return (
        <header className="bg-white px-4 py-3 flex justify-between items-center border-b border-gray-200">
            <LogoIcon />
            <div className="flex items-center space-x-4">
                <ShoppingCartIcon />
                <UserIcon />
            </div>
        </header>
    );
}