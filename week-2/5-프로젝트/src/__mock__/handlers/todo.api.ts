import { http, HttpResponse } from 'msw';

const todoApi = [
  http.get('/todo', () => HttpResponse.json({ message: 'success' })),
];

export default todoApi;
