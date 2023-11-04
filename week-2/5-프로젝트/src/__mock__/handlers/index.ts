import { HttpHandler } from 'msw';
import userApi from '@mock/handlers/user.api.ts';

type HandlersArray = HttpHandler[];

const setHandlers = (handlersArray: HandlersArray[]) => {
  let handler: HttpHandler[] = [];
  handlersArray.forEach((v) => {
    handler = [...handler, ...v.flat()];
  });
  return handler;
};

const handler = setHandlers([userApi]);
export default handler;
