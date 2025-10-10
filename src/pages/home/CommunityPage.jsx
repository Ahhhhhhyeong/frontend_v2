// src/pages/CommunityPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCommunity } from '@/context/CommunityContext.jsx'; // ✨ Context import
import { EditIcon } from '@/components/Icons.jsx';
import ProductTooltip from '@/components/ProductTooltip.jsx';
import OutlineCategoryChips from '../../components/chips/OutlineCategoryChips';

const filterCategories = ['전체', '일상', '농사일기', '궁금해요', '나눔해요', '꿀팁'];

export default function CommunityPage() {
  const { communityData } = useCommunity(); // ✨ Context에서 게시물 목록 가져오기
  const [activeFilter, setActiveFilter] = useState('전체');
  const [activeTooltipId, setActiveTooltipId] = useState(null);

  // 필터링된 게시물
  const filteredPosts = communityData?.filter((post) => activeFilter === '전체' || post.category === activeFilter);

  return (
    <div className='relative pb-24'>
      <div className='flex w-full items-center gap-2 px-4 py-2 overflow-x-auto bg-white border-b sticky top-0 z-10'>
        <OutlineCategoryChips
          categories={filterCategories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>

      <div className='flex flex-col w-full items-start bg-white'>
        {filteredPosts &&
          filteredPosts?.map((post) => (
            <article key={post.id} className='w-full border-b py-4'>
              <div className='flex items-center justify-between px-4 pb-3'>
                <div className='flex items-center gap-3'>
                  <img src={post.user.avatar} alt={post.user.name} className='w-8 h-8 rounded-full object-cover' />
                  <span className='font-medium text-base text-gray-800'>{post.user.name}</span>
                </div>
                <button
                  className={`px-4 py-1 text-sm font-semibold ${
                    post.user.isFollowing ? 'text-gray-500' : 'text-green-500'
                  }`}>
                  {post.user.isFollowing ? '팔로잉' : '팔로우'}
                </button>
              </div>

              <div className='w-full px-4 mb-3'>
                <p className='text-gray-800 text-sm leading-relaxed whitespace-pre-wrap'>{post.content}</p>
              </div>

              {post.images && post.images.length > 0 && (
                <div className='relative w-full h-[375px] bg-gray-100'>
                  <img src={post.images[0]} alt='게시물 이미지' className='w-full h-full object-cover' />

                  {post.tags &&
                    post.tags.map((tag, index) => (
                      <div key={index}>
                        <button
                          onClick={() => setActiveTooltipId(activeTooltipId === post.id ? null : post.id)}
                          className='absolute w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer'
                          style={{ top: `${tag.y}px`, left: `${tag.x}px` }}>
                          <div className='w-2.5 h-2.5 bg-green-500 rounded-full'></div>
                        </button>
                        {activeTooltipId === post.id && <ProductTooltip product={post.product} position={tag} />}
                      </div>
                    ))}
                </div>
              )}
            </article>
          ))}
      </div>
    </div>
  );
}
