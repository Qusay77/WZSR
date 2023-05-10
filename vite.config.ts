import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig(({ mode }) => {
	if (mode === "lib") {
		return {
			build: {
				outDir: "./module",
				cssCodeSplit: false,
				lib: {
					entry: resolve(__dirname, "src/web.ts"),
					name: "WZSR",
					formats: ["es"],
					fileName: "WZSR",
				},
				rollupOptions: {
					manualChunks: undefined,
				},
			},
			css: {
				preprocessorOptions: {
					less: {
						javascriptEnabled: true,
					},
				},
			},
			define: {
				"process.env": process.env,
			},
			plugins: [react(), tsconfigPaths(), svgr(), cssInjectedByJsPlugin()],
		};
	}

	return {
		plugins: [react(), tsconfigPaths(), svgr()],
	};
});
