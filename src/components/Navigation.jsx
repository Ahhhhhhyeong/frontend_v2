// src/components/Navigation.jsx
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navigation() {
    const [activeMainChip, setActiveMainChip] = useState('베스트');
    const location = useLocation();

    return (
        <>
            {/* 커머스 / 커뮤니티 탭 - sticky 관련 클래스 제거 */}
            <div className="bg-white flex border-b border-gray-200">
                {/* --- 바뀐 부분 시작 --- */}
                {/* NavLink의 className 부분이 생략되지 않은 전체 코드로 수정되었습니다. */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex-1 py-3 text-center font-bold ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`
                    }
                >
                    커머스
                </NavLink>
                <NavLink
                    to="/community"
                    className={({ isActive }) =>
                        `flex-1 py-3 text-center font-bold ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`
                    }
                >
                    커뮤니티
                </NavLink>
                {/* --- 바뀐 부분 끝 --- */}
            </div>

            {/* 메인 카테고리 칩 */}
            {location.pathname === '/' && (
                <div className="bg-white px-4 py-3 border-b border-gray-200">
                    {/* --- 바뀐 부분 시작 --- */}
                    {/* 카테고리 칩 버튼 부분이 생략되지 않은 전체 코드로 수정되었습니다. */}
                    <div className="flex space-x-2 overflow-x-auto pb-2 -mb-2">
                        {['베스트', '과일', '채소', '축산', '수산', '김치/젓갈', '쌀/잡곡'].map(chip => (
                            <button
                                key={chip}
                                onClick={() => setActiveMainChip(chip)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${activeMainChip === chip ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                            >
                                {chip}
                            </button>
                        ))}
                    </div>
                    {/* --- 바뀐 부분 끝 --- */}
                </div>
            )}
        </>
    );
}