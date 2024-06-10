import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@Elements": "/resources/js/Components/Elements",
            "@Fragments": "/resources/js/Components/Fragments",
            "@Layouts": "/resources/js/Components/Layouts",
            "@Icons": "/resources/js/Assets/Icons",
        },
    },
});
