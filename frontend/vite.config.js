import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // when we send a request to /api, we want to send it to http://localhost:5000/api (we will not have to put the domain)
      },
    },
  },
});
