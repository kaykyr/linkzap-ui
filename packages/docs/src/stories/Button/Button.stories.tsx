import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@linkzap-ui/react'

export default {
    title: 'Button',
    component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        disabled: false,
        size: 'small',
        color: 'primary',
    },
}

export const Success: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        disabled: false,
        size: 'small',
        color: 'success',
    },
}

export const Danger: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        disabled: false,
        size: 'small',
        color: 'danger',
    },
}

export const Warning: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        disabled: false,
        size: 'small',
        color: 'warning',
    },
}

export const Dark: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        disabled: false,
        size: 'small',
        color: 'dark',
    },
}

export const LightGrey: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        disabled: false,
        size: 'small',
        color: 'lightGrey',
    },
}
