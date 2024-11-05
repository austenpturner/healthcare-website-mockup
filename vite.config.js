import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/healthcare-website-mockup/",
  build: {
    outDir: "dist",
  },
  // resolve: {
  //   alias: {
  //     "@": "/src",
  //   },
  // },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/styles/styles.scss";`,
  //     },
  //   },
  // },
});
