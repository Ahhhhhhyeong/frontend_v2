import React from 'react';

// 아이콘들
const HeartIcon = ({ filled = false }) => (
    <svg className={`w-6 h-6 ${filled ? 'text-red-500' : 'text-white'}`} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
    </svg>
);
const StarIcon = () => (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

// 두 종류의 카드를 하나의 파일에서 관리합니다.
export function ProductCardSmall({ product }) {
    return (
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
}

export function ProductCardRanked({ product }) {
    return (
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
}