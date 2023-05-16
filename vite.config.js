import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 4000,
    proxy: {
      // proxy /api requests to http://localhost:3000
      "/api/v1": "http://localhost:3000",
    },
  },
});
