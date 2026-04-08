import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    base: "/Zombie-Must-Survive/",
    build: {
        sourcemap: true,
        minify: false,
    },
});
