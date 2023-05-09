import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
// import dts from "vite-plugin-dts";
import { resolve } from "path";
import libCss from "vite-plugin-libcss";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig(() => {
	return {
		build: {
			cssCodeSplit: false,
			lib: {
				entry: resolve(__dirname, "src/web.ts"),
				name: "WZSR",
				formats: ["es"],
				fileName: "WZSR",
			},
			rollupOptions: {
				external: ["react", "react-dom"],
				manualChunks: undefined,
				output: {
					globals: {
						react: "React",
						"react-dom": "ReactDOM",
					},
				},
			},
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
				},
			},
		},
		plugins: [
			react(),
			tsconfigPaths(),
			svgr(),
			// dts(),
			libCss(),
			cssInjectedByJsPlugin(),
		],
	};
});
