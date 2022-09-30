<!--
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2022-09-29 17:16:40
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2022-09-30 09:18:53
 * @FilePath: \voice-demo\src\views\Initiator.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>Initiator</div>
</template>
<script setup>
import { io } from "socket.io-client";
const socket = io();

let peer;

socket.on("signal", (answer) => {
  peer.signal(answer);
});

async function createPeer() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

  peer = new SimplePeer({ initiator: true, stream });

  peer.on("signal", (offer) => {
    socket.emit("signal", offer);
  });

  peer.on("connect", () => {
    console.log("connect");
  });
}

createPeer();
</script>
