import { StoryFn } from '@storybook/react';
import Header, { HeaderProps } from '@components/ui/organsims/Header/index.tsx';

export default {
  title: 'organisms/Header',
  tags: ['autodocs'],
  component: Header,
  argTypes: {
    isLogin: { control: 'boolean' },
  },
};

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Controller = Template.bind({});

Controller.args = {
  buttonInfo: [
    {
      used: true,
      text: 'main',
      onClick: () => console.log('메인페이지로 이동'),
    },
    {
      used: false,
      text: 'today',
      onClick: () => console.log('오늘의 추천 페이지 이동'),
    },
    {
      used: false,
      text: 'random',
      onClick: () => console.log('랜덤추천 이동'),
    },
    {
      used: false,
      text: 'search',
      onClick: () => console.log('검색페이지 이동'),
    },
  ],
};
