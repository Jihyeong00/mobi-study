import { ITodoDaily, ITodoMonthly, ITodoWeekly } from '@apis/1';
import { TodoDataBase, TodoEnum } from '@type/todo';

export const isDaily = (todo: TodoDataBase): todo is ITodoDaily => {
  return todo.type === TodoEnum.DAILY;
};

export const isWeekly = (todo: TodoDataBase): todo is ITodoWeekly => {
  return todo.type === TodoEnum.WEEKLY;
};

export const isMonthly = (todo: TodoDataBase): todo is ITodoMonthly => {
  return todo.type === TodoEnum.MONTHLY;
};
