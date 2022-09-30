<!--
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2022-09-29 17:18:45
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2022-09-30 09:21:12
 * @FilePath: \voice-demo\src\views\Receiver.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>Receiver</div>
  <audio controls autoplay></audio>
</template>
<script setup>
import { io } from "socket.io-client";
const socket = io();

let peer;

socket.on("signal", (offer) => {
  peer.signal(offer);
});

socket.on("start", () => {
  createPeer();
});

async function createPeer() {
  peer = new SimplePeer({ initiator: false });

  peer.on("signal", (answer) => {
    socket.emit("signal", answer);
  });

  peer.on("connect", () => {
    console.log("connect");
  });

  peer.on("stream", (stream) => {
    var audio = document.querySelector("audio");
    audio.srcObject = stream;
  });
}

createPeer();
</script>
