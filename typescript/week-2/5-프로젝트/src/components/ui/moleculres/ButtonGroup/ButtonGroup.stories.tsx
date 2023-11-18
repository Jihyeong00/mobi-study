import { StoryFn } from '@storybook/react';
import ButtonGroup, {
  ButtonGroupProps,
} from '@components/ui/moleculres/ButtonGroup/index.tsx';

export default {
  title: 'moleculres/ButtonGroup',
  tags: ['autodocs'],
  component: ButtonGroup,
  argTypes: {},
};

const Template: StoryFn<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Controller = Template.bind({});

Controller.args = {
  buttons: [
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
