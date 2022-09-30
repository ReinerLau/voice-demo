/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2022-09-29 17:13:58
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2022-09-29 17:29:13
 * @FilePath: \voice-demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2022-09-29 17:13:58
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2022-09-29 17:17:44
 * @FilePath: \voice-demo\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createWebHistory, createRouter } from "vue-router";
import App from '@/App.vue' 

export const constRoutes = [
  {
    path: "/",
    name: "home",
    component: App,
    redirect:'/initiator',
    children: [
      {
        path: "/initiator",
        name: "initiator",
        component: () => import("@/views/Initiator.vue"),
      },
      {
        path: "/receiver",
        name: "receiver",
        component: () => import("@/views/Receiver.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constRoutes,
});

export default router;
