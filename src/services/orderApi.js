// services/.js
import api from './api';

export const orderApi = {
  // GET 요청
  getOrders: async (id, params = {}) => {
    try {
      const resp = await api.get(`/orders/${id}`, { params });
      return resp;
    } catch (error) {
      throw error;
    }
  },

  getOrderDetail: async (id, orderId) => {
    try {
      const resp = await api.get(`/orders/${id}/${orderId}`);
      return resp;
    } catch (error) {
      throw error;
    }
  },

  // POST 요청
  createOrders: async (id, orderData) => {
    try {
      const resp = await api.post(`/orders/${id}`, orderData);
      return resp;
    } catch (error) {
      throw error;
    }
  },

  // PATCH 요청
  updateOrder: async (id, orderData) => {
    try {
      const resp = await api.patch(`/orders/${id}`, orderData);
      return resp;
    } catch (error) {
      throw error;
    }
  },
};
