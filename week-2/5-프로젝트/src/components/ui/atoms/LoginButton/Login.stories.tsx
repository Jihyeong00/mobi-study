import { StoryFn } from '@storybook/react';
import LoginButton, {
  LoginButtonProps,
} from '@components/ui/atoms/LoginButton/index.tsx';

export default {
  title: 'atom/LoginButton',
  tags: ['autodocs'],
  component: LoginButton,
};

const Template: StoryFn<LoginButtonProps> = (args) => <LoginButton {...args} />;

export const Controller = Template.bind({});

Controller.args = {
  login: () => console.log('로그인 되었습니다.'),
};
