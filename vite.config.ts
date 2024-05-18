import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  base: "/fem_stats/",
  plugins: [solid()],
});
