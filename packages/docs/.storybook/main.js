/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ["../src/stories/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
        {
            name: '@storybook/addon-styling',
        },
        "storybook-tailwind-dark-mode",
    ],
    framework: "@storybook/react-vite",
    core: {
        builder: "@storybook/builder-vite"
    },
    features: {
        storyStoreV7: true,
    }
}

export default config
