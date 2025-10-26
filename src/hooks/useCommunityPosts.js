// src/hooks/useCommunityPosts.js
import { useState, useEffect } from 'react';
import { communityApi } from '@/services/communityApi';
import { farmerStories } from '../data';
import { useQuery } from '@tanstack/react-query';

export const useCommunityPosts = (initialParams = {}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // 포스트 가져오기
  const fetchPosts = async (params = {}, replace = true) => {
    useQuery({
      queryKey: ['community'],
      queryFn: communityApi.getPosts({
        ...initialParams,
        ...params,
        page: replace ? 1 : page,
      }),

      staleTime: 10000 * 60 * 5,
    });
  };

  // 더 많은 포스트 로드 (무한 스크롤용)
  const loadMore = async () => {
    if (!hasMore || loading) return;

    const nextPage = page + 1;
    setPage(nextPage);

    await fetchPosts({ page: nextPage }, false);
  };

  // 새 포스트 추가
  const addPost = (post) => {
    setPosts((prev) => [{ ...post, id: Date.now() }, ...prev]);
  };

  // 포스트 좋아요 토글
  const toggleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              stats: {
                ...post.stats,
                isLiked: !post.stats.isLiked,
                likes: post.stats.isLiked
                  ? String(parseInt(post.stats.likes.replace(/[k,]/g, '')) - 1)
                  : String(parseInt(post.stats.likes.replace(/[k,]/g, '')) + 1),
              },
            }
          : post
      )
    );
  };

  // 카테고리별 필터링
  const filterByCategory = (category) => {
    fetchPosts({ category });
  };

  // 초기 로드
  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    hasMore,
    fetchPosts,
    // allPosts: fetchPosts.data,
    loadMore,
    addPost,
    toggleLike,
    filterByCategory,
    // fetchById,
    refetch: () => fetchPosts({}, true),
  };
};

// 포스트 1개만 가져오기
export const fetchById = (postId) => {
  // 임의 목데이터로 보내기
  const { data, isStale } = useQuery({
    queryKey: ['communityPost', postId],
    // queryFn: () => communityApi.getPostById(postId),
    queryFn: () =>
      Promise.resolve({
        postId: 0,
        title: '목데이터 제목',
        content: '목데이터 내용',
        producerId: 1,
        mediaUrls: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        taggedProducts: [
          {
            // productName: '목데이터 상품',
            // productId: 12345,
            // productImageUrl: 'https://via.placeholder.com/150',
            name: '목데이터 상품',
            id: 12345,
            image: 'https://via.placeholder.com/150',
            price: 10000,
          },
        ],
      }),
    staleTime: 10 * 60 * 1000, // 60분
  });
  // setPosts([data]);
  return { data, isStale };
};
