import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section.jsx';
import ProductCard from '../components/ProductCard.jsx';
import StoryCard from '../components/StoryCard.jsx';
import { EditIcon } from '../components/Icons.jsx';
import { interestProducts, seasonalProducts, farmerStories } from '../data.js';
import mainBannerImg from '../assets/images/homecommerce.png';
import userAvatarImg from '../assets/images/user-profile.png';

// 1. 카테고리 칩
function CategoryChips() {
   const [activeChip, setActiveChip] = useState('베스트');
   const categories = [
      '베스트',
      '과일',
      '채소',
      '축산',
      '수산',
      '김치/젓갈',
      '쌀/잡곡',
   ];
   return (
      <div className="flex space-x-2 overflow-x-auto pb-2 -mb-2">
         {categories.map((category) => (
            <button
               key={category}
               onClick={() => setActiveChip(category)}
               className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium ${
                  activeChip === category
                     ? 'bg-green-600 text-white'
                     : 'bg-gray-100 text-gray-700'
               }`}
            >
               {category}
            </button>
         ))}
      </div>
   );
}

// 2. 메인 배너
function MainBanner() {
   return (
      // 👇 배너 높이를 h-48 (192px) -> h-96 (384px)으로 수정하여 이미지가 잘리지 않게 함
      <section className="relative text-white rounded-lg overflow-hidden h-96">
         <img
            src={mainBannerImg}
            alt="메인 배너"
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-black bg-opacity-40 p-5 flex flex-col justify-end">
            <h2 className="text-xl font-bold">
               농부 이야기, 체험 후기 등<br />
               다양한 소식을 만나보세요
            </h2>
            <div className="flex items-center mt-3">
               <img
                  src={userAvatarImg}
                  alt="사용자 아바타"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
               />
               <span className="ml-2 font-semibold">닉네임</span>
            </div>
         </div>
      </section>
   );
}

// --- 메인 페이지 컴포넌트 ---
export default function MainPage() {
   const [activeChip, setActiveChip] = useState('추천');

   return (
      <div className="relative">
         <main className="px-4 py-6 space-y-10">
            <CategoryChips />
            <MainBanner />

            <Section title="00님의 관심있는 상품">
               <div className="-mx-4">
                  <div className="flex space-x-2 overflow-x-auto px-4 pb-2">
                     {['추천', '수박', '옥수수', '최근 본 상품'].map((chip) => (
                        <button
                           key={chip}
                           onClick={() => setActiveChip(chip)}
                           className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium ${
                              activeChip === chip
                                 ? 'bg-gray-800 text-white'
                                 : 'bg-gray-100 text-gray-600'
                           }`}
                        >
                           {chip}
                        </button>
                     ))}
                  </div>
               </div>
               <div className="mt-4 -mx-4">
                  <div className="flex space-x-3 overflow-x-auto px-4 pb-4">
                     {interestProducts.map((product) => (
                        <ProductCard
                           key={product.id}
                           product={product}
                           type="small"
                        />
                     ))}
                  </div>
               </div>
            </Section>

            <Section title="7월 인기 제철음식" showMore={true}>
               <div className="-mx-4">
                  <div className="flex space-x-4 overflow-x-auto px-4 pb-4">
                     {seasonalProducts.map((product) => (
                        <ProductCard
                           key={product.id}
                           product={product}
                           type="ranked"
                        />
                     ))}
                  </div>
               </div>
            </Section>

            <Section title="농부의 이야기를 확인해보세요" showMore={true}>
               <div className="space-y-6">
                  {farmerStories.map((story) => (
                     <StoryCard key={story.id} story={story} />
                  ))}
               </div>
            </Section>
         </main>

         <Link to="/register-product" className="fixed bottom-6 right-4">
            <button className="bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition">
               <EditIcon />
            </button>
         </Link>
      </div>
   );
}
