import { api } from './client';

export const createUser = (user) => api.post('/user/register', user);
export const getAllUser = (queryString) => api.get(`/user?${queryString}`);
