// src/components/ChatBottomSheet.jsx
// 게시물의 댓글을 보여주고 입력받는 Bottom Sheet UI 컴포넌트입니다.

import React from 'react';
// 필요한 아이콘들을 불러옵니다.
import { XIcon } from './Icons.jsx';

// --- 데이터 ---
// 댓글 목록 가짜 데이터
const comments = [
    { id: 1, user: '닉네임', avatar: 'https://placehold.co/32x32/d1fae5/10b981?text=A', content: '먹기 아까울 정도로 예뻐요! 껍질도 얇고 맛있어요.' },
    { id: 2, user: '닉네임', avatar: 'https://placehold.co/32x32/e0e7ff/4338ca?text=B', content: '이 글 보고 저도 주문했어요!\n먹기 아까울 정도로 예뻐요! 껍질도 얇고 맛있어요.' },
    { id: 3, user: '닉네임', avatar: 'https://placehold.co/32x32/ffedd5/9a3412?text=C', content: '다음엔 감자전 해보세요. 진짜 맛있어요!' },
];

// 댓글 하나하나를 렌더링하는 작은 컴포넌트
const Comment = ({ comment }) => (
    <div className="flex items-start space-x-3 py-3">
        <img src={comment.avatar} alt={comment.user} className="w-8 h-8 rounded-full" />
        <div className="flex-1">
            <div className="flex justify-between items-start">
                <div>
                    <p className="font-semibold text-sm text-gray-800">{comment.user}</p>
                    {/* white-space-pre-wrap: \n(줄바꿈) 문자를 실제 줄바꿈으로 렌더링해줍니다. */}
                    <p className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{comment.content}</p>
                </div>
                {/* '더보기' 아이콘 (기능은 추후 구현) */}
                <button className="text-gray-400">•••</button>
            </div>
        </div>
    </div>
);

// ChatBottomSheet 메인 컴포넌트
export default function ChatBottomSheet({ onClose }) {
    return (
        // 화면 전체를 덮는 반투명 배경. 클릭 시 onClose 함수를 호출하여 닫습니다.
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-end" onClick={onClose}>
            {/* 실제 Bottom Sheet UI. 클릭 이벤트가 배경으로 전파되지 않도록 막습니다. */}
            <div className="bg-white rounded-t-2xl w-full max-w-2xl max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                {/* 상단 핸들 */}
                <div className="py-3 flex justify-center items-center cursor-grab">
                    <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
                </div>

                {/* 댓글 제목 */}
                <h2 className="px-6 text-lg font-bold text-gray-900">댓글 {comments.length}개</h2>

                {/* 댓글 목록 (스크롤 가능) */}
                <div className="flex-1 overflow-y-auto px-6 mt-2">
                    {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                </div>

                {/* 댓글 입력창 (화면 하단에 고정) */}
                <div className="p-4 bg-white border-t border-gray-200 flex items-center space-x-3">
                    <img src="https://placehold.co/36x36/a7f3d0/059669?text=나" alt="My Avatar" className="w-9 h-9 rounded-full" />
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="댓글을 입력해주세요"
                            className="w-full h-10 bg-gray-100 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500 font-semibold text-sm">등록</button>
                    </div>
                </div>
            </div>
        </div>
    );
}