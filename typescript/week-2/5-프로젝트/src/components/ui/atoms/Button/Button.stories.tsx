import { StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '@components/ui/atoms/Button/index.tsx';

export default {
  title: 'atom/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    text: { control: 'text' },
    used: { control: 'boolean' },
  },
};

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Controller = Template.bind({});

Controller.args = {
  used: true,
  text: 'main',
};

export const LongController = {
  args: {
    used: false,
    text: '이것은 엄청나게 긴 문자열',
  },
};
