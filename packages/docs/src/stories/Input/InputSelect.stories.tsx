import type { StoryObj, Meta } from '@storybook/react'
import { Select, SelectProps } from '@linkzap-ui/react'

export default {
    title: 'InputSelect',
    component: Select,
    defaultValue: {
        label: 'Teste',
        value: 'teste',
    },
    label: 'InputSelect',
    handler: () => {},
} as Meta<SelectProps>

export const Default: StoryObj<SelectProps> = {
    args: {
        children: 'teste',
    },
}
