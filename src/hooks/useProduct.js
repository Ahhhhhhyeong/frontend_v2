// hooks/useProduct.js
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { itemApi } from '../services/itemApi';
import { farmerStoriesProd } from '../data';

// 상품 호출
export const useProduct = (productId) => {
  const navigate = useNavigate();
  return useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      // API 호출 버전 (백엔드 준비되면 주석 해제)
      // return itemApi.getProductDetail(productId);
      // 현재 localStorage 버전 혹은 목데이터에서 검색
      const storedProducts = JSON.parse(localStorage?.getItem('products')) || {};
      const foundProduct = storedProducts.find((p) => p.id.toString() === productId);

      if (!foundProduct) {
        throw new Error('상품을 찾을 수 없습니다.');
      }

      return foundProduct;
    },
    enabled: !!productId, // productId가 존재할 때만 실행
    retry: 1, // 에러 시 1번만 재시도
    onError: (error) => {
      console.error('상품 조회 에러:', error);
      navigate('/seller-market');
    },
  });
};

// 카테고리 호출
export const useCategoryCall = () => {
  // react query 호출
  return useQuery({
    queryKey: ['categories'],
    queryFn: itemApi.getItemsCategories,
    staleTime: 10000 * 60 * 5,
  });
};
