export interface TodoFormValues {
  text: string;
}

export type FilterStatus = 'all' | 'new' | 'completed';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  name: string;
  username: string;
  password: string;
}
