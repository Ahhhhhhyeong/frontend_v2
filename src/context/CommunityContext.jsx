import React, { createContext, useContext, useState } from 'react';

const CommunityContext = createContext();

export const useCommunity = () => {
  const context = useContext(CommunityContext);
  if (!context) {
    throw new Error('useCommunity must be used within a CommunityProvider');
  }
  return context;
};

export const CommunityProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  const addPost = (post) => {
    setPosts(prev => [post, ...prev]);
  };

  const updatePost = (postId, updates) => {
    setPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, ...updates } : post
    ));
  };

  const deletePost = (postId) => {
    setPosts(prev => prev.filter(post => post.id !== postId));
  };

  const likePost = (postId) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            stats: { 
              ...post.stats, 
              isLiked: !post.stats.isLiked,
              likes: post.stats.isLiked 
                ? (parseInt(post.stats.likes.replace('+', '')) - 1).toString() + (post.stats.likes.includes('+') ? '+' : '')
                : (parseInt(post.stats.likes.replace('+', '')) + 1).toString() + (post.stats.likes.includes('+') ? '+' : '')
            }
          }
        : post
    ));
  };

  const followUser = (postId) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, user: { ...post.user, isFollowing: !post.user.isFollowing } }
        : post
    ));
  };

  const value = {
    posts,
    setPosts,
    activeFilter,
    setActiveFilter,
    loading,
    setLoading,
    addPost,
    updatePost,
    deletePost,
    likePost,
    followUser,
  };

  return (
    <CommunityContext.Provider value={value}>
      {children}
    </CommunityContext.Provider>
  );
};
