import { LoginPayload, RegisterPayload, User } from 'models';
import axiosClient from './axiosClient';

export interface AuthResponse {
  accessToken: string;
  expiredAt: number;
}

const userApi = {
  login(data: LoginPayload): Promise<AuthResponse> {
    const url = '/login';
    return axiosClient.post(url, data);
  },

  register(data: RegisterPayload): Promise<AuthResponse> {
    const url = '/register';
    return axiosClient.post(url, data);
  },

  getMe(): Promise<User> {
    const url = '/profile';
    return axiosClient.get(url);
  },
};

export default userApi;
