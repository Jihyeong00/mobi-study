import { StoryFn } from '@storybook/react';
import Logo from '@components/ui/atoms/Logo/index.tsx';

export default {
  title: 'atom/Logo',
  tags: ['autodocs'],
  component: Logo,
  argTypes: {},
};

const Template: StoryFn = (args) => <Logo {...args} />;

export const Controller = Template.bind({});

Controller.args = {};
