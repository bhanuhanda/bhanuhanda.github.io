import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@mdx-js/rollup';

import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), mdx()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                notFound: resolve(__dirname, "404.html"),
            },
        },
    },
});
