// src/pages/MyPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, CouponIcon } from '../components/Icons'; 

export default function MyPage() {
    return (
        <div className="w-full bg-white h-full overflow-y-auto">
            {/* 상단 프로필 섹션 */}
            <div className="w-full h-[283px] bg-[#e8f9f2] pt-12 px-5 relative">
                <div className="flex items-center space-x-4 pt-10">
                    <img className="w-12 h-12 rounded-full bg-gray-300" alt="프로필 이미지" src="user-profile-placeholder.png" />
                    <div>
                        <div className="text-lg font-semibold text-gray-900">소비자 닉네임</div>
                        <div className="text-sm text-gray-900">소비자 아이디</div>
                    </div>
                </div>
                {/* 농부로 전환 버튼 */}
                <Link to="/seller-mypage" className="absolute top-[131px] right-5 px-3 py-2 bg-green-500 rounded-lg text-white font-medium text-sm">
                    농부로 전환
                </Link>
            </div>
            
            {/* 쿠폰함 카드 */}
            <Link to="/mypage/coupons" className="flex p-4 mt-[-40px] mx-4 bg-white rounded-xl shadow-md justify-between items-center z-10 relative">
                <div className="flex items-center space-x-3">
                    <CouponIcon />
                    <span className="text-base font-medium text-gray-900">쿠폰함</span>
                </div>
                <div className="flex items-center">
                    <span className="text-sm font-semibold text-green-500">0</span>
                    <ChevronRightIcon />
                </div>
            </Link>

            {/* 진행중인 주문 섹션 */}
            <div className="p-5">
                <h3 className="text-base font-semibold text-gray-900">진행중인 주문</h3>
                <div className="mt-4 grid grid-cols-5 gap-1 text-center text-gray-600 text-xs">
                    <div className="flex flex-col items-center">
                        <span className="h-9 flex items-center justify-center font-medium">
                            <p>입금<br />대기</p>
                        </span>
                        <span className="mt-1 text-lg font-bold text-green-500">0</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="h-9 flex items-center justify-center font-medium">
                            <p>결제<br />완료</p>
                        </span>
                        <span className="mt-1 text-lg font-bold text-green-500">0</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="h-9 flex items-center justify-center font-medium">
                            <p>배송<br />준비</p>
                        </span>
                        <span className="mt-1 text-lg font-bold text-green-500">0</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="h-9 flex items-center justify-center font-medium">
                            배송중
                        </span>
                        <span className="mt-1 text-lg font-bold text-green-500">0</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="h-9 flex items-center justify-center font-medium">
                            <p>배송<br />완료</p>
                        </span>
                        <span className="mt-1 text-lg font-bold text-green-500">0</span>
                    </div>
                </div>
                <Link to="/mypage/orders" className="flex items-center justify-center mt-4 border-t border-b py-3 text-sm text-gray-600 font-medium">
                    주문 배송 내역 전체 보기
                </Link>
            </div>

            {/* 메뉴 리스트 섹션 */}
            <div className="mt-2 border-t">
                <Link to="/mypage/orders" className="flex justify-between items-center border-b p-5">
                    <span className="text-base font-medium text-gray-800">주문배송내역 조회</span>
                    <ChevronRightIcon />
                </Link>
                <Link to="/mypage/likes" className="flex justify-between items-center border-b p-5">
                    <span className="text-base font-medium text-gray-800">좋아요</span>
                    <ChevronRightIcon />
                </Link>
                <Link to="/mypage/bookmarks" className="flex justify-between items-center border-b p-5">
                    <span className="text-base font-medium text-gray-800">북마크</span>
                    <ChevronRightIcon />
                </Link>
                <Link to="/mypage/reviews" className="flex justify-between items-center border-b p-5">
                    <span className="text-base font-medium text-gray-800">나의 리뷰</span>
                    <ChevronRightIcon />
                </Link>
            </div>
        </div>
    );
}