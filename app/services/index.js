import axios from 'axios';

export const FlowUrl = axios.create({
  baseURL: 'http://10.10.10.93:3000/api/v1',
  timeout: 18000,
});
