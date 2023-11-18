import {StoryFn} from '@storybook/react';
import LogInOutButton from '@components/ui/moleculres/LogInOutButton/index.tsx';

export default {
    title: 'moleculres/LogInOutButton',
    tags: ['autodocs'],
    component: LogInOutButton,
};

const Template: StoryFn = (args) => <LogInOutButton {...args} />;

export const Controller = Template.bind({});

