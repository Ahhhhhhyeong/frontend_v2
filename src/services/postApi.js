// services/postApi.js
import api from './api';

export const postApi = {
  // POST 요청
  createPost: async (id, postData) => {
    try {
      const resp = await api.post(`/posts/${id}`, postData);
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
