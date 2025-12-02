import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "Leo",
            fileName: (format) => `leo.${format}.js`,
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: [
                "clsx",
                "react",
                "react-dom",
                "react-aria-components",
                "@adobe/react-spectrum",
                "class-variance-authority"
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM"
                }
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
});