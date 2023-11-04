import { StoryFn } from '@storybook/react';
import UserCard from '@components/ui/moleculres/UserCard/index.tsx';

export default {
  title: 'moleculres/UserCard',
  tags: ['autodocs'],
  component: UserCard,
  argTypes: {
    isLogin: { control: 'boolean' },
  },
};

const Template: StoryFn = (args) => <UserCard {...args} />;

export const Controller = Template.bind({});
