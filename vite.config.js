/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2022-09-29 17:06:53
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2022-09-30 09:20:29
 * @FilePath: \voice-demo\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/socket.io": {
        target: "ws://localhost:3000",
        ws: true,
      },
    },
  },
});
