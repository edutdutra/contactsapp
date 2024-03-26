import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://contacts-api-d3zh.onrender.com',
});
