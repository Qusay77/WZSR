import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import libCss from "vite-plugin-libcss";
export default defineConfig(() => {
	return {
		build: {
			cssCodeSplit: true,
			lib: {
				entry: resolve(__dirname, "src/lib.tsx"),
				name: "WZSR",
				formats: ["es"],
				fileName: "WZSR",
			},
			rollupOptions: {
				external: ["react", "react-dom"],
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
		plugins: [react(), tsconfigPaths(), svgr(), dts(), libCss()],
	};
});
