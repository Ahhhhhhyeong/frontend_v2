// services/commentApi.js
import api from './api';

export const commentApi = {
  // GET 요청
  getComments: (postId) => {
    try {
      const resp = api.get(`comments/${postId}`);
      return resp;
    } catch (error) {
      throw error;
    }
  },

  // POST 요청
  postComment: (postId, userId, contents) => {
    try {
      const resp = api.post(`comments/${postId}/${userId}`, contents);
      return resp;
    } catch (error) {
      throw error;
    }
  },

  // DELETE 요청
  deleteComment: (postId, commentId) => {
    try {
      const resp = api.delete(`comments/${postId}/${commentId}`);
      return resp;
    } catch (error) {
      throw error;
    }
  },

  // PATCH 요청
  updateComment: (postId, commentId, contents) => {
    try {
      const resp = api.patch(`comments/${postId}/${commentId}`, contents);
      return resp;
    } catch (error) {
      throw error;
    }
  },
};
