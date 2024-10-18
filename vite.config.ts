import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'build_dist',
    },
    resolve: {
        alias: {
            "@": path.join(__dirname, "./src/"),
        },
    },
    plugins: [react()],
});
