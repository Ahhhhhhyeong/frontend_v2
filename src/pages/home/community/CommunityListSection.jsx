import React from 'react';
import PostHeader from '@/components/post/PostHeader';
import PostContent from '@/components/post/PostContent';
import PostImageSection from './PostImageSection';

export default function CommunityListSection({ post, activeTooltipId, setActiveTooltipId }) {
  return (
    <article className='w-full border-b py-4'>
      <PostHeader user={post.user} />

      <PostContent post={post} />

      {post.images && post.images.length > 0 && (
        <PostImageSection
          key={post.id}
          post={post}
          activeTooltipId={activeTooltipId}
          setActiveTooltipId={setActiveTooltipId}
        />
      )}
    </article>
  );
}
