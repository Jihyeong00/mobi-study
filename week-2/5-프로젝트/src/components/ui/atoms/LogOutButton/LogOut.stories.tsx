import { StoryFn } from '@storybook/react';
import LogOutButton, {
  LogOutButtonProps,
} from '@components/ui/atoms/LogOutButton/index.tsx';
import { userMock } from '@mock/data/user.mock.ts';

export default {
  title: 'atom/LogOutButton',
  tags: ['autodocs'],
  component: LogOutButton,
};

const Template: StoryFn<LogOutButtonProps> = (args) => (
  <LogOutButton {...args} />
);

export const Controller = Template.bind({});

Controller.args = {
  userInfo: userMock.userInfo,
  logout: () => console.log('로그아웃이 되었습니다.'),
};
