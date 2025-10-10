// src/hooks/useCommunityPosts.js
import { useState, useEffect } from 'react';
import { communityApi } from '@/services/communityApi';
import { farmerStories } from '../data';

export const useCommunityPosts = (initialParams = {}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // 포스트 가져오기
  const fetchPosts = async (params = {}, replace = true) => {
    try {
      setLoading(true);
      setError(null);

      const response = await communityApi.getPosts({
        ...initialParams,
        ...params,
        page: replace ? 1 : page,
      });

      const newPosts = response.data || response;

      if (replace) {
        setPosts(newPosts);
        setPage(1);
      } else {
        setPosts((prev) => [...prev, ...newPosts]);
      }

      setHasMore(newPosts.length > 0);
    } catch (err) {
      console.error('포스트를 불러오는데 실패했습니다:', err);
      setError(err.message || '데이터를 불러오는데 실패했습니다.');

      // 첫 로드 시에만 폴백 데이터 사용
      if (replace && posts.length === 0) {
        setPosts(farmerStories);
      }
    } finally {
      setLoading(false);
    }
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
    loadMore,
    addPost,
    toggleLike,
    filterByCategory,
    refetch: () => fetchPosts({}, true),
  };
};
