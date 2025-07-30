// src/pages/MainPage.jsx
// 메인(커머스) 페이지의 실제 콘텐츠를 담당하는 컴포넌트입니다.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section.jsx';
// 👇 수정된 import 구문
import ProductCard from '../components/ProductCard.jsx'; 
import StoryCard from '../components/StoryCard.jsx';
import { EditIcon } from '../components/Icons.jsx'; 

// --- 데이터 (data.js 파일에서 불러왔다고 가정) ---
import { interestProducts, seasonalProducts, farmerStories } from '../data.js';

export default function MainPage() { 
    const [activeChip, setActiveChip] = useState('추천');

    return (
        <div className="relative">
            <main className="px-4 py-6 space-y-10">
                <section className="relative text-white rounded-lg overflow-hidden">
                    {/* ... 배너 섹션 ... */}
                </section>
                
                <Section title="00님의 관심있는 상품">
                    <div className="flex space-x-2">
                        {['추천', '수박', '옥수수', '최근 본 상품'].map(chip => ( <button key={chip} onClick={() => setActiveChip(chip)} className={`px-4 py-1.5 rounded-full text-sm font-medium ${activeChip === chip ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}>{chip}</button> ))}
                    </div>
                    <div className="mt-4 flex overflow-x-auto pb-4 -mb-4">
                        {/* 👇 수정된 컴포넌트 사용 부분 1 */}
                        {interestProducts.map(product => <ProductCard key={product.id} product={product} type="small" />)}
                    </div>
                </Section>
                
                <Section title="7월 인기 제철음식" showMore={true}>
                    <div className="flex overflow-x-auto pb-4 -mb-4">
                        {/* 👇 수정된 컴포넌트 사용 부분 2 */}
                        {seasonalProducts.map(product => <ProductCard key={product.id} product={product} type="ranked" />)}
                    </div>
                </Section>
                
                <Section title="농부의 이야기를 확인해보세요" showMore={true}>
                    <div className="space-y-6">
                        {farmerStories.map(story => <StoryCard key={story.id} story={story} />)}
                    </div>
                </Section>
            </main>

            {/* ... 플로팅 버튼 ... */}
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