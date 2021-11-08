import { Category } from 'models';
import axiosClient from './axiosClient';

const categoryApi = {
  getAll(): Promise<Category[]> {
    const url = '/categories';
    return axiosClient.get(url);
  },
};

export default categoryApi;
