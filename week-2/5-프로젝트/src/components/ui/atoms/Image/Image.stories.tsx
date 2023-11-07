import {StoryFn} from '@storybook/react';
import Image, {ImageProps} from "@components/ui/atoms/Image/index.tsx";
import logoSrc from '@assets/png/logo.png';

export default {
    title: 'atom/Image',
    tags: ['autodocs'],
    component: Image,
    argTypes: {
        src: {control: {type: 'file', accept: '.png'}},
        alt: {control: 'text'},
        width: {control: 'number'},
        height: {control: 'number'}
    },
};

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Controller = Template.bind({});

Controller.args = {
    src: logoSrc,
    alt: "로고",
    width: 100,
    height: 60
};
