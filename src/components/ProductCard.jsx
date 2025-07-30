// src/components/ProductCard.jsx
import React, { useState } from 'react';
import HeartIcon from '../assets/icons/heart.svg?react';
import StarIcon from '../assets/icons/star.svg?react';

const RankBadge = ({ rank }) => (
  <div className="absolute top-0 left-0 bg-black bg-opacity-60 text-white text-sm font-bold px-3 py-1 rounded-tl-lg rounded-br-lg">
    {rank}
  </div>
);

const Rating = ({ rating, reviews }) => (
  <div className="flex items-center text-xs text-gray-500 mt-1">
    <StarIcon className="w-4 h-4 text-yellow-400" />
    <span className="ml-1 font-bold">{rating}</span>
    <span className="ml-1">({reviews})</span>
  </div>
);

export default function ProductCard({ product, type = 'small' }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => setIsLiked(!isLiked);

  const cardSize = type === 'ranked' ? 'w-40' : 'w-36';
  const imageSize = type === 'ranked' ? 'h-40' : 'h-36';

  return (
    <div className={`flex-shrink-0 ${cardSize} mr-3`}>
      <div className="relative">
        {/* 👇 product.image를 사용하도록 수정 */}
        <img src={product.image} alt={product.name} className={`w-full ${imageSize} object-cover rounded-lg bg-gray-200`} />
        
        {type === 'ranked' && product.rank && <RankBadge rank={product.rank} />}
        
        {type === 'small' && (
          <button onClick={handleLikeClick} className="absolute top-2 right-2 bg-black bg-opacity-30 rounded-full p-1">
            <HeartIcon className={`w-6 h-6 ${isLiked ? 'text-red-500' : 'text-white'}`} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
        )}
      </div>

      <div className="mt-2">
        {/* 👇 product.name을 사용하도록 수정 */}
        <p className="text-sm text-gray-700 font-medium truncate h-10">{product.name}</p>
        <div className="flex items-center mt-1">
          {/* 👇 product.discount와 product.price를 사용하도록 수정 */}
          <span className="text-red-500 font-bold">{product.discount}</span>
          <span className="text-gray-900 font-bold ml-2">{product.price}</span>
        </div>

        {type === 'ranked' && product.rating && (
          <Rating rating={product.rating} reviews={product.reviews} />
        )}
      </div>
    </div>
  );
}