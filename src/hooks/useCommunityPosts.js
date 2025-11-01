// src/hooks/useCommunityPosts.js
import { useState, useEffect } from 'react';
import { communityApi } from '@/services/communityApi';
import { farmerStories } from '../data';
import { useQuery } from '@tanstack/react-query';

export const useCommunityPosts = (initialParams = {}) => {
  const [params, setParams] = useState(initialParams);
  const [posts, setPosts] = useState([]);

  // 기본 포스트 조회 (현재는 로컬스토리지, 나중에 API로 변경)
  const {
    data: fetchedPosts,
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['community', params],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await communityApi.getPosts({
        ...params,
        page: pageParam,
        limit: 10,
      });
      return response;
    },
    staleTime: 10000 * 60 * 5,
    onSuccess: (data) => {
      // replace 여부에 따라 데이터 처리
      if (params.replace !== false) {
        setPosts(data);
      } else {
        // 무한스크롤용 - 기존 데이터에 추가
        setPosts((prev) => [...prev, ...data]);
      }
    },
  });

  // 무한스크롤을 위한 별도 상태
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // 포스트 가져오기
  const fetchPosts = (newParams = {}, replace = true) => {
    const updatedParams = {
      ...params,
      ...newParams,
      page: replace ? 1 : page,
      replace,
    };
    setParams(updatedParams);

    if (replace) {
      setPage(1);
    }
  };

  // 더 많은 포스트 로드 (무한 스크롤용)
  const loadMore = () => {
    if (!hasMore || loading) return;

    const nextPage = page + 1;
    setPage(nextPage);

    fetchPosts({ page: nextPage }, false);
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

  // hasMore 로직 (실제 데이터에 따라 조정 필요)
  useEffect(() => {
    if (fetchedPosts && fetchedPosts.length < 10) {
      // 예: 페이지당 10개씩
      setHasMore(false);
    }
  }, [fetchedPosts]);

  return {
    posts,
    loading,
    error,
    hasMore,
    fetchPosts,
    loadMore,
    addPost,
    toggleLike,
    filterByCategory,
    refetch: () => fetchPosts({}, true),
  };
};

// 포스트 1개만 가져오기
export const fetchById = (postId) => {
  // 임의 목데이터로 보내기
  const { data, isStale } = useQuery({
    queryKey: ['communityPost', postId],
    // queryFn: () => communityApi.getPostsDetail(postId),
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
