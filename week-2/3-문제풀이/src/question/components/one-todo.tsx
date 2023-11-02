import type { TodoDataBase } from '@type/todo';
import { isDaily, isMonthly, isWeekly } from 'util/typeGuard';

const OneTodo: React.FC<{ todo: TodoDataBase }> = ({ todo }) => {
  let TodoComponent: React.ReactNode;

  if (isMonthly(todo)) {
    TodoComponent = (
      <>
        {todo.goal} {todo.type}
      </>
    );
  }

  if (isWeekly(todo)) {
    TodoComponent = (
      <>
        {todo.total} {todo.type}
      </>
    );
  }

  if (isDaily(todo)) {
    TodoComponent = (
      <>
        {todo.content} {todo.title} {todo.type}
      </>
    );
  }

  return <div>{TodoComponent}</div>;
};
export default OneTodo;
