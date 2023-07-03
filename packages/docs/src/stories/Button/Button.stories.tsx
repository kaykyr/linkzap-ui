import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@linkzap-ui/react'

export default {
    title: 'Button',
    disabled: false,
    size: 'auto',
    color: 'primary',
    component: Button,
} as Meta<ButtonProps>

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        disabled: true,
        color: 'primary',
    },
}

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        color: 'primary',
    },
}

export const Success: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        color: 'success',
    },
}

export const Danger: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        color: 'danger',
    },
}

export const Warning: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        color: 'warning',
    },
}

export const Dark: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        color: 'dark',
    },
}

export const FullWidth: StoryObj<ButtonProps> = {
    args: {
        children: 'Button',
        size: 'w-full',
        color: 'primary',
    },
}
