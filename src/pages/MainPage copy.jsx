// src/pages/MainPage.jsx
// 메인(커머스) 페이지의 실제 콘텐츠를 담당하는 컴포넌트입니다.

import React, { useState } from 'react';
// 페이지 이동을 위해 Link를 불러옵니다.
import { Link } from 'react-router-dom';
import Section from '../components/Section.jsx';
import { ProductCardSmall, ProductCardRanked } from '../components/ProductCard.jsx';
import StoryCard from '../components/StoryCard.jsx';
import PostEditor from '../components/PostEditor.jsx'; 
import { EditIcon } from '../components/Icons.jsx'; 

// --- 데이터 (이전과 동일) ---
const interestProducts = [  { id: 1, name: '고당도 하우스 수박', price: '21,000원', discount: '16%', image: 'https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?q=80&w=400&auto=format&fit=crop' },  { id: 2, name: '초당 옥수수 10개입', price: '15,900원', discount: '20%', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=400&auto=format&fit=crop' },  { id: 3, name: '유기농 블루베리 500g', price: '18,000원', discount: '10%', image: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=400&auto=format&fit=crop' },];
const seasonalProducts = [  { id: 1, rank: 1, name: 'GAP 인증 자두 (대과)', price: '25,900원', discount: '13%', rating: '5.0', reviews: '999+', image: 'https://images.unsplash.com/photo-1562016600-ece13e8ba583?q=80&w=400&auto=format&fit=crop' },  { id: 2, rank: 2, name: '해남 미니 밤호박 3kg', price: '19,900원', discount: '15%', rating: '4.9', reviews: '999+', image: 'https://images.unsplash.com/photo-1621234387435-38c02b47332f?q=80&w=400&auto=format&fit=crop' },];
const farmerStories = [    { id: 1, title: '산골짜기에서 온 달콤한 선물', user: { name: '복숭아 농부', avatar: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?q=80&w=100&auto=format&fit=crop' }, time: '7시간 전', image: 'https://images.unsplash.com/photo-1629974229432-a853d4353c29?q=80&w=600&auto=format&fit=crop' },    { id: 2, title: '토마토가 익어가는 계절', user: { name: '토마토 할머니', avatar: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=100&auto=format&fit=crop' }, time: '1일 전', image: 'https://images.unsplash.com/photo-1561138234-8d8a1f83864a?q=80&w=600&auto=format&fit=crop' },];

export default function MainPage({ onCreatePost }) { 
    const [activeChip, setActiveChip] = useState('추천');
    const [isEditorOpen, setIsEditorOpen] = useState(false); 

    return (
        <div className="relative">
            <main className="px-4 py-6 space-y-10">
                <section className="relative text-white rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1523341232997-786d65a40b83?q=80&w=800&auto=format&fit=crop" alt="메인 배너" className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 p-5 flex flex-col justify-end">
                        <h2 className="text-xl font-bold">농부 이야기, 체험 후기 등<br />다양한 소식을 만나보세요</h2>
                        <div className="flex items-center mt-3">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" alt="사용자 아바타" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                            <span className="ml-2 font-semibold">닉네임</span>
                        </div>
                    </div>
                </section>
                <Section title="00님의 관심있는 상품">
                    <div className="flex space-x-2">
                        {['추천', '수박', '옥수수', '최근 본 상품'].map(chip => ( <button key={chip} onClick={() => setActiveChip(chip)} className={`px-4 py-1.5 rounded-full text-sm font-medium ${activeChip === chip ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}>{chip}</button> ))}
                    </div>
                    <div className="mt-4 flex overflow-x-auto pb-4 -mb-4">
                        {interestProducts.map(product => <ProductCardSmall key={product.id} product={product} />)}
                    </div>
                </Section>
                <Section title="7월 인기 제철음식" showMore={true}>
                    <div className="flex overflow-x-auto pb-4 -mb-4">
                        {seasonalProducts.map(product => <ProductCardRanked key={product.id} product={product} />)}
                    </div>
                </Section>
                <Section title="농부의 이야기를 확인해보세요" showMore={true}>
                    <div className="space-y-6">
                        {farmerStories.map(story => <StoryCard key={story.id} story={story} />)}
                    </div>
                </Section>
            </main>

            {/* 상품 등록 플로팅 버튼 */}
            <Link to="/register-product" className="fixed bottom-6 right-1/2 transform translate-x-1/2 max-w-2xl w-full px-6 pointer-events-none">
                <div className="absolute bottom-0 right-6 pointer-events-auto">
                    <button className="bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition">
                        <EditIcon />
                    </button>
                </div>
            </Link>
        </div>
    );
}
