import { http, HttpResponse } from 'msw';
import { userMock } from '@mock/data/user.mock.ts';

const userApi = [
  http.get('/login', () =>
    HttpResponse.json(
      { message: 'success', ...userMock, isLogin: true },
      { status: 200 }
    )
  ),
  http.get('/logout', () =>
    HttpResponse.json(
      { message: 'success', ...userMock, userInfo: undefined },
      { status: 200 }
    )
  ),
];

export default userApi;
