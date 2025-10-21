// src/components/community/CommunityPost.jsx
import React, { useState } from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostImageWithTags from './PostImageWithTag';
import PostInteractionBar from '@/components/social/PostInteractionBar.jsx';
import LinkedProductList from './LinkedProductList';

export default function CommunityPost({ post, activeTooltipId, setActiveTooltipId }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    // API 호출
  };

  const handleComment = () => {
    // 댓글 창 열기
    console.log('댓글 클릭');
  };

  const handleShare = () => {
    // 북마크 기능
    console.log('북마크 클릭');
  };

  return (
    <article className='w-full py-12'>
      <PostHeader user={post.user} />

      <PostContent content={post.content} />

      {/* 배찌 추가 */}
      {post.images && post.images.length > 0 && <PostImageWithTags post={post} />}

      {/* 상품 데이터 */}
      {Array.isArray(post?.product) && post.product.length > 0 && <LinkedProductList products={post.product} />}

      {/* 인터랙션 바 추가 */}
      <PostInteractionBar
        likeCount={likeCount}
        commentCount={post.commentCount || 0}
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
        isLiked={isLiked}
      />
    </article>
  );
}
