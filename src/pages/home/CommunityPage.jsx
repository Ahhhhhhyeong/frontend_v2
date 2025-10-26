// src/pages/CommunityPage.jsx

import React, { useState } from 'react';

// --- components ---
import CommunityPost from '../../components/community/CommunityPost';
import WriteButton from '@/components/button/WriteButton';

// --- 임시 목 데이터 ---
import { farmerStories } from '@/data';
import { useUserCheck } from '../../hooks/useUserInfo';
import { useCommunityPosts } from '../../hooks/useCommunityPosts';

// const filterCategories = ['전체', '공예품', '농산물', '수산물', '농장체험', '축산업'];

export default function CommunityPage() {
  // 카테고리 내용 호출
  const { allPosts } = useCommunityPosts();
  console.log(allPosts);
  // TODO: 물품 호출(필요시)

  const [activeTooltipId, setActiveTooltipId] = useState(null);
  const { isSeller } = useUserCheck();

  // 필터링된 게시물
  const filteredPosts = farmerStories;

  return (
    <div className='relative '>
      {/* 게시물 목록 */}
      <div className='flex flex-col w-full items-start bg-white'>
        {filteredPosts &&
          filteredPosts?.map((post) => (
            <CommunityPost
              key={post.id}
              post={post}
              activeTooltipId={activeTooltipId}
              setActiveTooltipId={setActiveTooltipId}
            />
          ))}
      </div>

      {/* 플로트 버튼 */}
      {isSeller && <WriteButton />}
    </div>
  );
}
