// src/context/CommunityContext.jsx

import React, { createContext, useContext, useState } from 'react';
// ✨ [수정] 'data.js'에서 'farmerStories'를 가져오도록 import 구문을 수정합니다.
import { farmerStories } from '../data';

const CommunityContext = createContext();

export const useCommunity = () => useContext(CommunityContext);

export const CommunityProvider = ({ children }) => {
  // ✨ [수정] 상태 초기화 시 farmerStories를 사용합니다.
  const [posts, setPosts] = useState(farmerStories);

  const addPost = (post) => {
    setPosts(prev => [post, ...prev]);
  };

  const value = { posts, addPost };

  return (
    <CommunityContext.Provider value={value}>
      {children}
    </CommunityContext.Provider>
  );
};