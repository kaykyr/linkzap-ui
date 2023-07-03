import type { StoryObj, Meta } from '@storybook/react'

export default {
    title: 'Tailwind',
    component: () => (
        <button
            className={`
                placeholder:text-medium
                -ml-3
                flex
                w-[150px]
                cursor-not-allowed
                justify-center
                rounded
                rounded-xl
                bg-accent-1
                bg-accent-2
                bg-accent-3
                bg-black
                bg-chart-primary-1
                bg-chart-primary-2
                bg-danger
                bg-dark
                bg-lightGrey
                bg-lightGrey
                bg-primary
                bg-success
                bg-transparent
                bg-warning
                bg-white
                p-2
                p-full
                p-lg
                p-md
                p-px
                p-sm
                p-xs
                px-4
                px-6
                py-4
                py-6
                font-default
                font-secondary
                text-2xl
                text-lg
                text-md
                text-sm
                text-xl
                text-xs
                text-xss
                font-bold
                font-medium
                font-regular
                font-semibold
                text-[#808191]
                text-black
                text-light
                transition-opacity
                duration-300
                placeholder:text-sm
                placeholder:font-bold
                hover:opacity-75
            `}
        >
            <span className="text-white">Tailwind</span>
        </button>
    ),
} as Meta

export const Default: StoryObj = {}
