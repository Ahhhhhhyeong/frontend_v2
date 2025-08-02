// src/pages/SellerMyPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, UserIcon } from '../components/Icons';

// ... (StatBar 컴포넌트는 이전과 동일)
const StatBar = ({ day, value, maxValue }) => {
    const heightPercentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
    return (
        <div className="flex flex-col items-center justify-end h-full gap-2">
            <div 
                className={`w-full rounded-t ${value > 0 ? 'bg-green-500' : 'bg-gray-200'}`}
                style={{ height: `${heightPercentage}%`, minHeight: '4px' }}
            ></div>
            <span className="text-xs text-gray-500">{day}</span>
        </div>
    );
};


export default function SellerMyPage() {
    const activityData = {
        '월': 132, '화': 0, '수': 0, '목': 0, '금': 0, '토': 0, '일': 0
    };
    const maxValue = Math.max(...Object.values(activityData));

    return (
        <div className="w-full bg-gray-100 h-full overflow-y-auto">
            {/* 상단 프로필 섹션 */}
            <div className="w-full bg-white pt-4 px-5 pb-6">
                <div className="flex items-center space-x-3">
                    <img className="w-16 h-16 rounded-full bg-gray-300" alt="프로필 이미지" />
                    <div className="flex-grow">
                        <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold text-gray-800">판매자 닉네임</span>
                            <span className="text-base text-gray-600">농부님</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">판매자 아이디</div>
                    </div>
                    <Link to="/mypage" className="flex-shrink-0 px-3 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium text-sm border border-gray-200">
                        고객으로 전환
                    </Link>
                </div>

                {/* 리뷰, 팔로워 정보 */}
                <div className="mt-6 flex justify-around text-center">
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-gray-800">0</span>
                        <span className="text-sm text-gray-500 mt-1">리뷰 평점</span>
                    </div>
                    <div className="w-px bg-gray-200 h-8 self-center"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-gray-800">0</span>
                        <span className="text-sm text-gray-500 mt-1">리뷰수</span>
                    </div>
                    <div className="w-px bg-gray-200 h-8 self-center"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold text-gray-800">0</span>
                        <span className="text-sm text-gray-500 mt-1">팔로워</span>
                    </div>
                </div>

                {/* --- ✨ 수정된 부분: 개인 마켓으로 가기 버튼 링크 --- */}
                <Link to="/seller-market" className="mt-6 flex p-3 bg-gray-100 rounded-lg justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-1.5 rounded-full">
                            <UserIcon className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                            <p className="text-base font-semibold text-gray-800">개인 마켓으로 가기</p>
                            <p className="text-xs text-gray-500">농장 기본 정보</p>
                        </div>
                    </div>
                    <ChevronRightIcon />
                </Link>
            </div>

            <div className="h-3 bg-gray-100"></div>
            
            {/* ... (이하 활동 분석 및 메뉴 섹션은 이전과 동일) ... */}
            <div className="p-5 bg-white">
                 <Link to="/seller-mypage/stats" className="flex justify-between items-center">
                    <h3 className="text-base font-bold text-gray-900">활동분석</h3>
                    <ChevronRightIcon />
                 </Link>
                <div className="mt-4">
                    <p className="text-sm text-gray-600">프로필 열람수</p>
                    <p className="text-3xl font-bold text-gray-800 mt-1">132</p>
                    <div className="mt-4 h-28 grid grid-cols-7 gap-3">
                        {Object.entries(activityData).map(([day, value]) => (
                            <StatBar key={day} day={day} value={value} maxValue={maxValue} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-3 bg-gray-100"></div>
            <div className="bg-white">
                <h3 className="text-base font-bold text-gray-900 px-5 pt-5">커머스</h3>
                <div className="mt-2">
                    <Link to="/register-product" className="flex justify-between items-center p-5 border-b">
                        <span className="text-base font-medium text-gray-800">상품 등록하기</span>
                        <ChevronRightIcon />
                    </Link>
                    <Link to="/seller-mypage/products" className="flex justify-between items-center p-5 border-b">
                        <span className="text-base font-medium text-gray-800 flex items-center gap-2">
                            나의 상품 관리
                            <span className="text-sm text-green-600 font-bold bg-green-100 w-5 h-5 flex items-center justify-center rounded-full">0</span>
                        </span>
                        <ChevronRightIcon />
                    </Link>
                    <Link to="/seller-mypage/product-inquiries" className="flex justify-between items-center p-5 border-b">
                        <span className="text-base font-medium text-gray-800 flex items-center gap-2">
                            상품 문의 관리
                            <span className="text-sm text-green-600 font-bold bg-green-100 w-5 h-5 flex items-center justify-center rounded-full">0</span>
                        </span>
                        <ChevronRightIcon />
                    </Link>
                    <Link to="/seller-mypage/reviews" className="flex justify-between items-center p-5">
                         <span className="text-base font-medium text-gray-800">리뷰</span>
                        <ChevronRightIcon />
                    </Link>
                </div>
            </div>
            <div className="h-3 bg-gray-100"></div>
            <div className="bg-white pb-4">
                <h3 className="text-base font-bold text-gray-900 px-5 pt-5">커뮤니티</h3>
                <div className="mt-2">
                    <Link to="/seller-mypage/posts" className="flex justify-between items-center p-5 border-b">
                        <span className="text-base font-medium text-gray-800 flex items-center gap-2">
                            작성 글
                            <span className="text-sm text-green-600 font-bold bg-green-100 w-5 h-5 flex items-center justify-center rounded-full">0</span>
                        </span>
                        <ChevronRightIcon />
                    </Link>
                    <Link to="/seller-mypage/comments" className="flex justify-between items-center p-5">
                        <span className="text-base font-medium text-gray-800 flex items-center gap-2">
                            댓글
                             <span className="text-sm text-green-600 font-bold bg-green-100 w-5 h-5 flex items-center justify-center rounded-full">0</span>
                        </span>
                        <ChevronRightIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}