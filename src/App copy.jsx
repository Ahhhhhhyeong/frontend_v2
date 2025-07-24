import React, { useState } from 'react';

// App.jsx
// 이 파일 하나에 메인 페이지의 모든 UI가 들어있습니다.
// 처음에는 이렇게 한 파일에서 작업하며 전체 구조를 파악하고,
// 다음 단계에서 각 부분을 별도의 컴포넌트 파일로 분리할 것입니다.

// --- 아이콘 컴포넌트들 ---
// 실제 프로젝트에서는 SVG 파일을 import 하거나 아이콘 라이브러리(lucide-react 등)를 사용합니다.
// 여기서는 학습을 위해 JSX로 직접 아이콘을 그렸습니다.
const LogoIcon = () => (
  <svg width="86" height="24" viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="24" fill="black" fontWeight="bold">Farm:Us</text>
  </svg>
);
const ShoppingCartIcon = () => (
  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
);
const UserIcon = () => (
  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);
const HeartIcon = ({ filled = false }) => (
  <svg className={`w-6 h-6 ${filled ? 'text-red-500' : 'text-white'}`} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
  </svg>
);
const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);
const ChevronRightIcon = () => (
    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);


// --- 데이터 ---
// 실제로는 API를 통해 서버에서 받아올 데이터입니다.
// 지금은 화면을 그리기 위해 가짜(mock) 데이터를 사용합니다.
const interestProducts = [
  { id: 1, name: '고당도 하우스 수박', price: '21,000원', discount: '16%', image: 'https://placehold.co/140x140/a3e635/ffffff?text=수박' },
  { id: 2, name: '초당 옥수수 10개입', price: '15,900원', discount: '20%', image: 'https://placehold.co/140x140/facc15/ffffff?text=옥수수' },
  { id: 3, name: '유기농 블루베리 500g', price: '18,000원', discount: '10%', image: 'https://placehold.co/140x140/818cf8/ffffff?text=블루베리' },
];

const seasonalProducts = [
  { id: 1, rank: 1, name: 'GAP 인증 자두 (대과)', price: '25,900원', discount: '13%', rating: '5.0', reviews: '999+', image: 'https://placehold.co/160x160/f87171/ffffff?text=자두' },
  { id: 2, rank: 2, name: '해남 미니 밤호박 3kg', price: '19,900원', discount: '15%', rating: '4.9', reviews: '999+', image: 'https://placehold.co/160x160/fb923c/ffffff?text=밤호박' },
  { id: 3, rank: 3, name: '성주 참외 로열과 2kg', price: '22,000원', discount: '10%', rating: '5.0', reviews: '999+', image: 'https://placehold.co/160x160/fde047/ffffff?text=참외' },
  { id: 4, rank: 4, name: '무농약 데라웨어 포도', price: '28,000원', discount: '5%', rating: '4.9', reviews: '876', image: 'https://placehold.co/160x160/c084fc/ffffff?text=포도' },
];

const farmerStories = [
    { id: 1, title: '산골짜기에서 온 달콤한 선물', user: { name: '복숭아 농부', avatar: 'https://placehold.co/32x32/f9a8d4/ffffff?text=농' }, time: '7시간 전', image: 'https://placehold.co/300x200/ec4899/ffffff?text=복숭아밭' },
    { id: 2, title: '토마토가 익어가는 계절', user: { name: '토마토 할머니', avatar: 'https://placehold.co/32x32/ef4444/ffffff?text=할' }, time: '1일 전', image: 'https://placehold.co/300x200/dc2626/ffffff?text=토마토' },
];


// --- 메인 App 컴포넌트 ---
export default function App() {
  const [activeTab, setActiveTab] = useState('커머스');
  const [activeChip, setActiveChip] = useState('추천');
  const [activeMainChip, setActiveMainChip] = useState('베스트');

  // 재사용을 위해 카드 컴포넌트를 분리하면 좋습니다.
  // 지금은 App 컴포넌트 안에 정의하여 구조를 파악해봅니다.
  const ProductCardSmall = ({ product }) => (
    <div className="flex-shrink-0 w-36 mr-3">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-36 object-cover rounded-lg bg-gray-200" />
        <button className="absolute top-2 right-2 bg-black bg-opacity-30 rounded-full p-1">
          <HeartIcon />
        </button>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-700 truncate">{product.name}</p>
        <div className="flex items-center mt-1">
          <span className="text-red-500 font-bold text-sm">{product.discount}</span>
          <span className="text-gray-900 font-bold text-sm ml-1">{product.price}</span>
        </div>
      </div>
    </div>
  );

  const ProductCardRanked = ({ product }) => (
    <div className="flex-shrink-0 w-40 mr-4">
        <div className="relative">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg bg-gray-200" />
            <div className="absolute top-0 left-0 bg-black bg-opacity-60 text-white text-sm font-bold px-3 py-1 rounded-tl-lg rounded-br-lg">
                {product.rank}
            </div>
        </div>
        <div className="mt-2">
            <p className="text-sm text-gray-700 font-medium h-10">{product.name}</p>
            <div className="flex items-center mt-1">
                <span className="text-red-500 font-bold">{product.discount}</span>
                <span className="text-gray-900 font-bold ml-2">{product.price}</span>
            </div>
            <div className="flex items-center text-xs text-gray-500 mt-1">
                <StarIcon />
                <span className="ml-1 font-bold">{product.rating}</span>
                <span className="ml-1">({product.reviews})</span>
            </div>
        </div>
    </div>
  );

  const FarmerStoryCard = ({ story }) => (
    <div className="flex-shrink-0 w-full sm:w-72 mr-4">
        <div className="relative">
            <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded-lg bg-gray-200" />
            <button className="absolute top-3 right-3 bg-black bg-opacity-30 rounded-full p-1">
                <HeartIcon />
            </button>
        </div>
        <div className="mt-3">
            <p className="font-bold text-gray-800 text-lg">{story.title}</p>
            <div className="flex items-center text-sm text-gray-500 mt-2">
                <img src={story.user.avatar} alt={story.user.name} className="w-6 h-6 rounded-full mr-2" />
                <span>{story.user.name}</span>
                <span className="mx-2">·</span>
                <span>{story.time}</span>
            </div>
        </div>
    </div>
  );

  return (
    // 전체 레이아웃 컨테이너
    <div className="bg-white max-w-2xl mx-auto font-sans">
      
      {/* 1. 상단 헤더 */}
      <header className="sticky top-0 bg-white z-10 px-4 py-3 flex justify-between items-center border-b border-gray-200">
        <LogoIcon />
        <div className="flex items-center space-x-4">
          <ShoppingCartIcon />
          <UserIcon />
        </div>
      </header>

      {/* 2. 커머스 / 커뮤니티 탭 */}
      <div className="sticky top-[61px] bg-white z-10 flex border-b border-gray-200">
        {['커머스', '커뮤니티'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-center font-bold ${activeTab === tab ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. 메인 카테고리 칩 */}
      <div className="px-4 py-3 border-b border-gray-200">
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
      </div>
      
      <main className="px-4 py-6 space-y-10">
        {/* 4. 메인 배너 */}
        <section className="relative text-white rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x400/34d399/ffffff?text=농부+이야기" alt="메인 배너" className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 p-5 flex flex-col justify-end">
            <h2 className="text-xl font-bold">농부 이야기, 체험 후기 등<br/>다양한 소식을 만나보세요</h2>
            <div className="flex items-center mt-3">
              <img src="https://placehold.co/32x32/ffffff/000000?text=U" alt="사용자 아바타" className="w-8 h-8 rounded-full border-2 border-white" />
              <span className="ml-2 font-semibold">닉네임</span>
            </div>
          </div>
        </section>

        {/* 5. 00님의 관심있는 상품 */}
        <section>
          <h3 className="text-lg font-bold text-gray-900">00님의 관심있는 상품</h3>
          <div className="flex space-x-2 mt-4">
            {['추천', '수박', '옥수수', '최근 본 상품'].map(chip => (
              <button 
                key={chip}
                onClick={() => setActiveChip(chip)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium ${activeChip === chip ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
              >
                {chip}
              </button>
            ))}
          </div>
          <div className="mt-4 flex overflow-x-auto pb-4 -mb-4">
            {interestProducts.map(product => <ProductCardSmall key={product.id} product={product} />)}
          </div>
        </section>

        {/* 6. 7월 인기 제철음식 */}
        <section>
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900">7월 인기 제철음식</h3>
                <button className="flex items-center text-sm text-gray-500 font-medium">
                    <span>더보기</span>
                    <ChevronRightIcon />
                </button>
            </div>
            <div className="mt-4 flex overflow-x-auto pb-4 -mb-4">
                {seasonalProducts.map(product => <ProductCardRanked key={product.id} product={product} />)}
            </div>
        </section>

        {/* 7. 농부의 이야기를 확인해보세요 */}
        <section>
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900">농부의 이야기를 확인해보세요</h3>
                <button className="flex items-center text-sm text-gray-500 font-medium">
                    <span>더보기</span>
                    <ChevronRightIcon />
                </button>
            </div>
            <div className="mt-4 space-y-6">
                {farmerStories.map(story => <FarmerStoryCard key={story.id} story={story} />)}
            </div>
        </section>
      </main>

    </div>
  );
}
