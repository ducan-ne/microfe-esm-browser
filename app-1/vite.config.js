import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(() => (
  {
    plugins: [react()],
    resolve: {
      alias: {
        "react": "https://esm.sh/react",
        "react-dom": "https://esm.sh/react-dom",
      },
    },
    build: {
      rollupOptions: {
        input: './app-1/App.jsx',
        preserveEntrySignatures: true,
        output: {
          entryFileNames: 'entry.js',
          format: 'esm'
        }
      },
    },
  }
))
