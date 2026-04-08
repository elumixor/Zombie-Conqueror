import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    base: "/zombie-must-survive/",
    build: {
        sourcemap: true,
        minify: false,
    },
});
