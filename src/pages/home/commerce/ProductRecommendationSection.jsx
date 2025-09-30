import React, { useState } from 'react';
import Section from '@/components/Section.jsx';
import ProductCard from '@/components/ProductCard.jsx';

export default function ProductRecommendationSection({ userName, tabs, interestProducts }) {
  const [activeChip, setActiveChip] = useState(tabs[0]);
  return (
    <Section title={`${userName}님의 관심있는 상품`}>
      <div className='-mx-4'>
        <div className='flex space-x-2 overflow-x-auto px-4 pb-2'>
          {tabs.map((chip) => (
            <button
              key={chip}
              onClick={() => setActiveChip(chip)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium ${
                activeChip === chip ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'
              }`}>
              {chip}
            </button>
          ))}
        </div>
      </div>
      <div className='mt-4 -mx-4'>
        <div className='flex space-x-3 overflow-x-auto px-4 pb-4'>
          {interestProducts.map((product) => (
            <ProductCard key={product.id} product={product} type='small' />
          ))}
        </div>
      </div>
    </Section>
  );
}
