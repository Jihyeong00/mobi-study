import { TodoEnum } from '@type/todo';
import axios from 'axios';

export interface ITodoDaily {
  type: TodoEnum.DAILY;
  content: string;
  title: string;
}

export interface ITodoWeekly {
  type: TodoEnum.WEEKLY;
  total: Date;
}

export interface ITodoMonthly {
  type: TodoEnum.MONTHLY;
  goal: string;
}

export const TodoApi = {
  async getTodo() {
    const res = await axios.get<ITodoDaily | ITodoMonthly | ITodoWeekly>('/');
    return res.data;
  },
};

const fetcher = async () => {
  return await TodoApi.getTodo();
};

const data = await fetcher();

console.log(data);
