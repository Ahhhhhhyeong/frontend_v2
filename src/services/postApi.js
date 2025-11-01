// services/postApi.js
import axios from 'axios';
import { createFormDataForMultipart } from '../utils/formData';
import api from './api';
import config from './config';

export const postApi = {
  // POST 요청
  createPost: async (id, postData) => {
    try {
      const formData = createFormDataForMultipart(postData);
      // const resp = await api.post(`/posts/${id}`, formData);
      const resp = await fetch(`${config.apiUrl}/posts/${id}`, {
        method: 'POST',
        body: formData,
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      });
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
