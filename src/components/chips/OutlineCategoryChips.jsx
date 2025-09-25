import React from 'react';

export default function OutlineCategoryChips({ categories, activeFilter, setActiveFilter }) {
  return (
    <>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-3 py-1.5 rounded-full border whitespace-nowrap text-sm ${
            activeFilter === category
              ? 'bg-green-50 border-green-500 text-green-500 font-medium'
              : 'bg-transparent border-gray-200 text-gray-500'
          }`}>
          {category}
        </button>
      ))}
    </>
  );
}
