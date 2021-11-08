import { Product, QueryParams } from 'models';
import axiosClient from './axiosClient';

export const productApi = {
  getAll(params: QueryParams): Promise<Product[]> {
    const url = '/products';
    return axiosClient.get(url, { params });
  },

  get(id: string): Promise<Product> {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  add(data: Product): Promise<Product> {
    const url = '/products';
    return axiosClient.post(url, data);
  },

  update(id: string, data: Partial<Product>): Promise<Product> {
    const url = `/products/${id}`;
    return axiosClient.patch(url, data);
  },

  remove(id: string) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};
