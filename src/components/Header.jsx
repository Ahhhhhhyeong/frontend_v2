// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../assets/icons/logo.svg?react';
import ShoppingCartIcon from '../assets/icons/shopping-cart.svg?react';
import UserIcon from '../assets/icons/user.svg?react';

export default function Header() {
  return (
    <header className="bg-white px-4 py-3 flex justify-between items-center border-b border-gray-200">
      {/* 로고 클릭 시 홈으로 이동하는 기능 추가 */}
      <Link to="/">
        <LogoIcon className="h-6 w-[86px]" />
      </Link>

      <div className="flex items-center space-x-4">
        {/* 장바구니 버튼은 아직 기능이 없으므로 button 태그 유지 */}
        <button aria-label="장바구니 보기">
          <ShoppingCartIcon className="w-6 h-6 text-gray-800 hover:text-green-600" />
        </button>
        {/* 사용자 아이콘 클릭 시 마이페이지로 이동하도록 Link로 변경 */}
        <Link to="/mypage" aria-label="내 정보 보기">
          <UserIcon className="w-6 h-6 text-gray-800 hover:text-green-600" />
        </Link>
      </div>
    </header>
  );
}