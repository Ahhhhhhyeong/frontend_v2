// src/components/ProductTooltip.jsx
import React from 'react';

// 상품 정보를 표시하는 툴팁 컴포넌트
export default function ProductTooltip({ product, position }) {
  // position prop이 없으면 렌더링하지 않음
  if (!position) return null;

  return (
    // style 속성을 이용해 태그 위치에 툴팁을 동적으로 표시합니다.
    <div
      className="absolute bg-gray-800 bg-opacity-80 rounded-lg p-2 shadow-lg w-48 z-10"
      style={{ top: `${position.y + 20}px`, left: `${position.x - 40}px` }}
    >
      <div className="flex items-center gap-2">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-12 h-12 bg-gray-300 rounded-md object-cover flex-shrink-0"
        />
        <div className="flex flex-col text-white text-xs">
          <span className="font-medium">{product.brand}</span>
          <span className="truncate">{product.name}</span>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-orange-400 text-sm font-semibold">
              {product.discount}
            </span>
            <span className="text-sm font-semibold">
              {product.price}
            </span>
          </div>
        </div>
      </div>
      {/* 툴팁 꼬리 부분 */}
      <div 
        className="absolute w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-gray-800 border-opacity-80"
        style={{ top: '-8px', left: '40px' }}
      ></div>
    </div>
  );
}