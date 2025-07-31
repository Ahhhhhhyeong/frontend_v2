// src/components/Header.jsx
import React from 'react';
import LogoIcon from '../assets/icons/logo.svg?react';
import ShoppingCartIcon from '../assets/icons/shopping-cart.svg?react';
import UserIcon from '../assets/icons/user.svg?react';

export default function Header() {
  return (
    <header className="bg-white px-4 py-3 flex justify-between items-center border-b border-gray-200">
      {/* 👇 클래스에 w-[86px]를 추가하여 너비를 명시적으로 지정합니다. */}
      <LogoIcon className="h-6 w-[86px]" />

      <div className="flex items-center space-x-4">
        <button aria-label="장바구니 보기">
          <ShoppingCartIcon className="w-6 h-6 text-gray-800 hover:text-green-600" />
        </button>
        <button aria-label="내 정보 보기">
          <UserIcon className="w-6 h-6 text-gray-800 hover:text-green-600" />
        </button>
      </div>
    </header>
  );
}