/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2022-09-29 17:06:53
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2022-09-30 09:12:33
 * @FilePath: \voice-demo\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import 'https://cdnjs.cloudflare.com/ajax/libs/simple-peer/9.11.1/simplepeer.min.js'

const app = createApp(App);
app.use(router);
app.mount("#app");
