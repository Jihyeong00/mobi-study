import { setupWorker } from 'msw/browser';
import handlers from '@mock/handlers';

const browser = setupWorker(...handlers);

export const mswServer = async () => {
  await browser.start();
};
