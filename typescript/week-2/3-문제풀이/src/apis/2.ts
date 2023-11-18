import type { TodoDataBase } from '@type/todo';
import axios from 'axios';

export const TodoApi = {
  async getTodo<T>() {
    const res = await axios.get<T>('/');
    return res.data;
  },
};

const fetcher = async () => {
  return await TodoApi.getTodo<TodoDataBase>();
};

const data = fetcher();

console.log(data);
