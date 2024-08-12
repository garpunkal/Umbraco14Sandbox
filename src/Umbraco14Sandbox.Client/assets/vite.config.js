import { defineConfig } from "vite";

export default defineConfig({
    build: {
        minify: true,
        lib: {
            entry: "src/index.ts",
            formats: ["es"],
                fileName: 'assets'
        },
        outDir: "../../Umbraco14Sandbox.Web/wwwroot/app_plugins/umbraco14sandbox", 
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/],
            output: {
                manualChunks: undefined,
                inlineDynamicImports: true,
                chunkFileNames: `[name]-[hash].js`,
            }
        },
    },  
     mode: 'production'
});

