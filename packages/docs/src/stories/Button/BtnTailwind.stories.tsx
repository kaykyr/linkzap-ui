import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'BtnTailwind',
    component: () => (
        <button
            className={`flex w-[150px] justify-center rounded bg-accent-1 bg-accent-2 bg-accent-3 bg-chart-primary-1 bg-chart-primary-2 bg-danger bg-dark bg-lightGrey bg-primary bg-success bg-warning bg-white p-2 transition-opacity duration-300 hover:opacity-75`}
        >
            <span className="text-white">Teste</span>
        </button>
    ),
} as Meta

export const Default: StoryObj = {}
