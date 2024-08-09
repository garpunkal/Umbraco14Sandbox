import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts", // your web component source file
            formats: ["es"],
        },
        outDir: "../../Umbraco14Sandbox.Web/wwwroot/app_plugins/umbraco14sandbox", 
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/],
            onwarn: () => { },
        },
    },
});