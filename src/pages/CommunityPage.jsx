// src/pages/CommunityPage.jsx
// 커뮤니티 페이지의 UI와 기능을 담당하는 컴포넌트입니다.

import React, { useState } from 'react';
import { HeartIcon, MessageCircleIcon, BookmarkIcon, PlusCircleIcon, EditIcon } from '../components/Icons.jsx';
import ChatBottomSheet from '../components/ChatBottomSheet.jsx';
import PostEditor from '../components/PostEditor.jsx';

// --- 컴포넌트 ---
const Tooltip = ({ product }) => ( <div className="absolute bg-black bg-opacity-80 text-white rounded-lg p-2 flex items-center space-x-2 shadow-lg z-10 w-60" style={{ transform: 'translateY(-110%)' }}><img src={product.image} alt={product.name} className="w-12 h-12 rounded-md object-cover" /><div className="text-xs"><p className="font-semibold">{product.brand}</p><p className="truncate">{product.name}</p><div className="flex items-center space-x-1 mt-1"><span className="text-red-400 font-bold">{product.discount}</span><span className="font-bold">{product.price}</span></div></div></div> );

const Post = ({ post, onCommentClick }) => {
    const [activeTooltip, setActiveTooltip] = useState(null);
    return (
        // --- 바뀐 부분 시작 (UI 개선) ---
        <div className="bg-white border-b border-gray-200 py-4">
            <div className="px-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <img src={post.avatar} alt={post.farmName} className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-bold text-gray-800 text-sm">{post.farmName}</span>
                </div>
                <button className="text-xs font-bold text-green-500 border border-green-500 rounded-md px-3 py-1.5">팔로우</button>
            </div>

            {post.image && (
                <div className="relative my-3" onClick={() => setActiveTooltip(null)}>
                    <img src={post.image} alt="게시물 이미지" className="w-full h-auto" />
                    <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white text-xs rounded-full px-2 py-1">{post.images?.length > 1 ? `1 / ${post.images.length}` : ''}</div>
                    {post.taggedProducts.map(product => (
                        <div key={product.id} className="absolute" style={{ top: product.position.top, left: product.position.left }}>
                            <button onClick={(e) => { e.stopPropagation(); setActiveTooltip(activeTooltip === product.id ? null : product.id) }} className="bg-black bg-opacity-50 rounded-full p-0.5">
                                <PlusCircleIcon />
                            </button>
                            {activeTooltip === product.id && (<div onClick={(e) => e.stopPropagation()}><Tooltip product={product} /></div>)}
                        </div>
                    ))}
                </div>
            )}

            <div className="px-4 py-2 flex justify-between items-center text-gray-600">
                <div className="flex space-x-4">
                    <div className="flex items-center space-x-1.5"><HeartIcon /><span className="text-sm">{post.likes}</span></div>
                    <button onClick={onCommentClick} className="flex items-center space-x-1.5"><MessageCircleIcon /><span className="text-sm">{post.comments}</span></button>
                </div>
                <BookmarkIcon />
            </div>

            <div className={`px-4 ${post.image ? '' : 'py-2'}`}>
                <div className="text-gray-800 text-sm leading-relaxed">
                    {post.content.map((line, index) => (<p key={index}>{line}</p>))}
                </div>
            </div>
        </div>
        // --- 바뀐 부분 끝 ---
    );
};

// CommunityPage 컴포넌트는 이제 props로 게시물 데이터와 생성 함수를 받습니다.
export default function CommunityPage({ posts, onCreatePost }) {
    const [activeChip, setActiveChip] = useState('전체');
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [isCommentSheetOpen, setIsCommentSheetOpen] = useState(false);
    const chips = ['전체', '공예품', '농산물', '수산물', '농장체험', '축산업'];
    
    return (
        <div className="relative min-h-screen">
            <div className="p-4 bg-white border-b border-gray-200">
                <div className="flex space-x-2 overflow-x-auto pb-2 -mb-2">{chips.map(chip => (<button key={chip} onClick={() => setActiveChip(chip)} className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${activeChip === chip ? 'bg-green-100 text-green-600 border border-green-600' : 'bg-gray-100 text-gray-700 border border-gray-200'}`}>{chip}</button>))}</div>
            </div>
            <div className="py-2">
                {posts.map(post => (<Post key={post.id} post={post} onCommentClick={() => setIsCommentSheetOpen(true)} />))}
            </div>
            <div className="fixed bottom-6 right-1/2 transform translate-x-1/2 max-w-2xl w-full px-6 pointer-events-none">
                <div className="absolute bottom-0 right-6 pointer-events-auto">
                     <button onClick={() => setIsEditorOpen(true)} className="bg-green-500 rounded-full p-4 shadow-lg">
                        <EditIcon />
                    </button>
                </div>
            </div>
            
            {isEditorOpen && <PostEditor onClose={() => setIsEditorOpen(false)} onCreatePost={onCreatePost} />}
            {isCommentSheetOpen && <ChatBottomSheet onClose={() => setIsCommentSheetOpen(false)} />}
        </div>
    );
}
