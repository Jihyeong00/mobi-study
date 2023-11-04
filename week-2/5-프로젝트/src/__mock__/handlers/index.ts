import { HttpHandler } from 'msw';
import todoApi from '@mock/handlers/todo.api.ts';

type HandlersArray = HttpHandler[];

const setHandlers = (handlersArray: HandlersArray[]) => {
  let handler: HttpHandler[] = [];
  handlersArray.forEach((v) => {
    handler = [...handler, ...v.flat()];
  });
  return handler;
};

const handler = setHandlers([todoApi]);
export default handler;
