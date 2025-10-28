import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  if (mode === 'demo') {
    return {
      plugins: [vue(), tailwindcss()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      base: './',
      build: {
        outDir: 'dist-demo',
        rollupOptions: {
          input: path.resolve(__dirname, 'src/demo/index.html')
        }
      },
      server: {
        port: 3000
      }
    }
  }

  return {
    plugins: [vue(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/lib/index.ts"),
        name: "Vueson",
        fileName: (format) => `vueson.${format}.js`,
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: { vue: "Vue" },
        },
      },
    },
  }
})