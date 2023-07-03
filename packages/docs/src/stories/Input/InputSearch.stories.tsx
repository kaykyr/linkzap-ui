import type { StoryObj, Meta } from '@storybook/react'
import { InputSearch, InputProps } from '@linkzap-ui/react'

export default {
    title: 'InputSearch',
    disabled: false,
    color: 'lightGrey',
    component: InputSearch,
} as Meta<InputProps>

export const Disabled: StoryObj<InputProps> = {
    args: {
        children: 'InputSearch',
        disabled: true,
    },
}

export const Transparent: StoryObj<InputProps> = {
    args: {
        children: 'InputSearch',
        disabled: false,
        color: 'transparent',
    },
}

export const Default: StoryObj<InputProps> = {
    args: {
        children: 'InputSearch',
        disabled: false,
    },
}
