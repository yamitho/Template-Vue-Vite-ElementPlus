import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export default {
  get: async (url) => {
    try {
      const response = await axios.get(`${apiUrl}${url}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al realizar la solicitud GET');
    }
  },

  post: async (url, data) => {
    try {
      const response = await axios.post(`${apiUrl}${url}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al realizar la solicitud POST');
    }
  },

  put: async (url, data) => {
    try {
      const response = await axios.put(`${apiUrl}${url}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al realizar la solicitud PUT');
    }
  },

  delete: async (url) => {
    try {
      const response = await axios.delete(`${apiUrl}${url}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al realizar la solicitud DELETE');
    }
  },
};
