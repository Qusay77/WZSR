import path from "path";

export const resolve = {
	extensions: [".tsx", ".ts", ".js"],
	alias: {
		packages: path.resolve(__dirname, "../packages"),
	},
};
export const module = {
	rules: [
		{
			test: /\.(ts|tsx)$/,
			exclude: [/node_modules/],
			use: [
				{
					loader: "ts-loader",
				},
			],
		},
	],
};
