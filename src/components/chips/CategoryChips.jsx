import React from 'react';
// 1. 카테고리 칩
function CategoryChips({ categories, activeChip, setActiveChip }) {
  return (
    <div className='flex space-x-2 overflow-x-auto pb-2 -mb-2'>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveChip(category)}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium ${
            activeChip === category ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryChips;
