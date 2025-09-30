import React from 'react';
import Section from '@/components/Section.jsx';
import ProductCard from '@/components/ProductCard.jsx';

export default function SeasonalFoodSection({ seasonalProducts }) {
  return (
    <Section title='7월 인기 제철음식' showMore={true}>
      <div className='-mx-4'>
        <div className='flex space-x-4 overflow-x-auto px-4 pb-4'>
          {seasonalProducts.map((product) => (
            <ProductCard key={product.id} product={product} type='ranked' />
          ))}
        </div>
      </div>
    </Section>
  );
}
