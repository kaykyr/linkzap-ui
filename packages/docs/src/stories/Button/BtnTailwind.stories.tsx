import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'BtnTailwind',
    component: () => (
        <button className="flex w-[150px] justify-center rounded bg-blue-600 p-2 transition-opacity duration-300 hover:opacity-75">
            <span className="text-white">Teste</span>
        </button>
    ),
} as Meta

export const Default: StoryObj = {}
