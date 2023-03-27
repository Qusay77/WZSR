module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react",
	core: {
		// builder: "@storybook/builder-webpack5",
		builder: "webpack5",
	},
	webpackFinal: async (config) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve("ts-loader"),
					options: {
						reportFiles: ["../**/*.{ts,tsx}"],
					},
				},
			],
		});
		config.resolve.extensions.push(".ts", ".tsx");
		// Return the altered config
		return config;
	},
};
