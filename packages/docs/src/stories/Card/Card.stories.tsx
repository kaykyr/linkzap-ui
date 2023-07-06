import type { StoryObj, Meta } from '@storybook/react'
import { Card } from '@linkzap-ui/react'

export default {
    title: 'Card',
    component: Card,
} as Meta

export const Default: StoryObj = {
    args: {
        children: 'Card',
    },
}
