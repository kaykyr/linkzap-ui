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
            options: {
                // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
                // For more details on this addon's options.
                postCss: true,
            },
        },
        "storybook-tailwind-dark-mode",
    ],
    framework: { name: "@storybook/react-vite", options: {} },
    // core: {
    //     builder: "@storybook/builder-vite"
    // },
    // features: {
    //     storyStoreV7: true,
    // }
}

export default config
