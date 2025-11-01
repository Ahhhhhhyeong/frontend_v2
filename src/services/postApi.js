// services/postApi.js
import axios from 'axios';
import { createFormDataForMultipart } from '../utils/formData';
import api from './api';
import config from './config';

export const postApi = {
  // POST 요청
  createPost: async (id, postData) => {
    try {
      console.log('🔍 1. API 호출 시작 - 원본 데이터:', postData);

      const formData = createFormDataForMultipart(postData);

      console.log('🔍 2. FormData 생성 직후 재확인:');
      let checkCount = 0;
      for (let [key, value] of formData.entries()) {
        checkCount++;
        console.log(`  재확인 ${key}:`, value);
      }
      console.log(`🔍 재확인 항목 수: ${checkCount}`);

      console.log('🔍 3. API 호출 직전');

      // FormData를 직접 전달
      const resp = await api.post(`/posts/${id}`, formData);
      console.log('✅ API 호출 성공:', resp);
      return resp;
    } catch (error) {
      throw error;
    }
  },

  // PATCH 요청
  patchPost: async (prdId, postId, postData) => {
    try {
      const resp = await api.patch(`/posts/${prdId}/${postId}`, postData);
      return resp;
    } catch (error) {
      throw error;
    }
  },

  // GET 요청
  getPosts: async (params = {}) => {
    try {
      const resp = await api.get('/posts', { params });
      return resp;
    } catch (error) {
      throw error;
    }
  },

  getPostDetail: async (postId) => {
    try {
      const resp = await api.get(`/posts/${postId}`);
      return resp;
    } catch (error) {
      throw error;
    }
  },

  // DELETE 요청
  deletePost: async (postId) => {
    try {
      const resp = await api.delete(`/posts/${postId}`);
      return resp;
    } catch (error) {
      throw error;
    }
  },
};
