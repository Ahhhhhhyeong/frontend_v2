import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// --- hook ---
import { fetchById } from '@/hooks/useCommunityPosts';

// --- 컴포넌트 ---
import CommonHeader from '@/components/Header/CommonHeader';
import ImageCarousel from '@/components/carousel/ImageCarousel';
import LinkedProductList from '@/components/community/LinkedProductList';
import PostInteractionBar from '@/components/social/PostInteractionBar';

export default function CommunityDetailPage() {
  const { id } = useParams();
  // TODO: id를 사용하여 커뮤니티 글 데이터 불러오고 표현
  const { data: post } = fetchById(id);
  console.log(post.taggedProducts);

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
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
    <div className='w-full w-max-[480px] '>
      {/* 헤더  */}
      <CommonHeader />
      <main>
        {/* title */}
        <div className='w-full py-2 border-b'>
          <div className='px-6 py-4 flex justify-start items-center gap-1'>
            <h2 className='text-gray-800 text-mb font-semibold leading-snug'>{post?.title}</h2>
          </div>
        </div>
        <div className='py-4 flex flex-col justify-start items-start w-full'>
          {/* images */}
          {post?.mediaUrls && post?.mediaUrls.length > 0 && <ImageCarousel images={post?.mediaUrls} mode='read' />}

          {/* 상품 연결 */}
          {post?.taggedProducts.length > 0 && (
            <LinkedProductList products={post?.taggedProducts} onProductClick={() => console.log('click')} />
          )}

          {/* 내용 */}
          <div className='px-6 py-8 w-full h-[264px] '>
            <p className='whitespace-pre-wrap text-gray-800 text-mb leading-relaxed'>{post?.content}</p>
          </div>
        </div>
      </main>

      {/* 인터렉션 바 추가 */}
      <PostInteractionBar
        likeCount={likeCount}
        commentCount={post.commentCount || 0}
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
        isLiked={isLiked}
      />
    </div>
  );
}
