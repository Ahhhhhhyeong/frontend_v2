// src/context/CommunityContext.jsx (변경 없음)

import React, { createContext, useContext, useState } from 'react';
// data.js에서 export한 farmerStories를 가져옵니다.
import { farmerStories } from '../data';
import { useCommunityPosts } from '@/hooks/useCommunityPosts';

const CommunityContext = createContext();

export const useCommunity = () => useContext(CommunityContext);

export const CommunityProvider = ({ children }) => {
  // farmerStories 데이터로 posts 상태를 초기화합니다.
  const communityData = useCommunityPosts();

  return <CommunityContext.Provider value={communityData}>{children}</CommunityContext.Provider>;
};
