import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../components/Icons';

export default function SellerMyPage() {
    return (
        <div className="w-full bg-white h-full overflow-y-auto">
            {/* 상단 프로필 섹션 */}
            <div className="w-full h-[283px] bg-[#e8f9f2] pt-12 px-5 relative">
                <div className="flex items-center space-x-4 pt-10">
                    <img className="w-12 h-12 rounded-full bg-gray-300" alt="프로필 이미지" src="user-profile-placeholder.png" />
                    <div>
                        <div className="text-lg font-semibold text-gray-900">판매자 닉네임</div>
                        <div className="text-sm text-gray-900">판매자 아이디</div>
                    </div>
                </div>
                {/* 고객으로 전환 버튼 */}
                <Link to="/mypage" className="absolute top-[131px] right-5 px-3 py-2 bg-gray-200 rounded-lg text-gray-600 font-medium text-sm">
                    고객으로 전환
                </Link>
            </div>
            
            {/* 판매자 정보 카드 (리뷰, 팔로워) */}
            <div className="grid grid-cols-3 gap-1 p-5 text-center -mt-10 mx-4 bg-white rounded-xl shadow-md z-10 relative">
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-green-500">0</span>
                    <span className="text-sm text-gray-600">리뷰 평점</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-green-500">0</span>
                    <span className="text-sm text-gray-600">리뷰수</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-green-500">0</span>
                    <span className="text-sm text-gray-600">팔로워</span>
                </div>
            </div>

            {/* 활동 분석 섹션 */}
            <div className="p-5 mt-4">
                <h3 className="text-base font-semibold text-gray-900">활동 분석</h3>
                <div className="mt-4 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                    <div>
                        <p className="text-sm text-gray-500">프로필 열람 수</p>
                        <p className="text-3xl font-bold text-green-500 mt-1">132</p>
                    </div>
                    {/* 상세 통계 보기 기능 */}
                    <Link to="/seller-mypage/stats" className="text-sm text-gray-600 font-medium flex items-center">
                        <span>상세 통계 보기</span>
                        <ChevronRightIcon />
                    </Link>
                </div>
            </div>

            {/* 커머스 메뉴 섹션 */}
            <div className="mt-2 border-t">
                <Link to="/register-product" className="flex justify-between items-center border-b p-5">
                    <span className="text-base font-medium text-gray-800">상품 등록하기</span>
                    <ChevronRightIcon />
                </Link>
                <Link to="/seller-mypage/products" className="flex justify-between items-center border-b p-5">
                    <span className="text-base font-medium text-gray-800">나의 상품 관리</span>
                    <ChevronRightIcon />
                </Link>
                <Link to="/seller-mypage/product-inquiries" className="flex justify-between items-center border-b p-5">
                    <span className="text-base font-medium text-gray-800">상품 문의 관리</span>
                    <ChevronRightIcon />
                </Link>
                <Link to="/seller-mypage/reviews" className="flex justify-between items-center border-b p-5">
                    <span className="text-base font-medium text-gray-800">리뷰</span>
                    <ChevronRightIcon />
                </Link>
            </div>

            {/* 커뮤니티 메뉴 섹션 */}
            <div className="mt-2 border-t">
                <Link to="/seller-mypage/posts" className="flex justify-between items-center border-b p-5">
                    <span className="text-base font-medium text-gray-800">작성글</span>
                    <ChevronRightIcon />
                </Link>
                <Link to="/seller-mypage/comments" className="flex justify-between items-center p-5">
                    <span className="text-base font-medium text-gray-800">댓글</span>
                    <ChevronRightIcon />
                </Link>
            </div>
        </div>
    );
}