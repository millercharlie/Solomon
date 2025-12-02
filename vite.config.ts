import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@libs": path.resolve(__dirname, "src/libs"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@database": path.resolve(__dirname, "src/database"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      // Treat SVGs and other assets correctly
      output: {
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
