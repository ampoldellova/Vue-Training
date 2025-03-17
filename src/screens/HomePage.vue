<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import vegetables from "../assets/animations/vegetables.json";
</script>

<template>
  <div
    style="
      height: 50%;
      background-color: #f3f4f8;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <div style="margin-left: 10%; margin-right: 10%">
      <el-text style="font-family: bold; font-size: 35px; color: black">
        Welcome to HalalExpress!
      </el-text>
      <div style="width: 500px">
        <el-text style="font-family: regular; font-size: 15px; color: #83829a">
          We deliver certified halal foods and products right to your doorstep.
          Enjoy a wide variety of halal options, ensuring quality and
          authenticity in every order.
        </el-text>
      </div>
    </div>
    <div>
      <Vue3Lottie :animation-data="vegetables" :height="550" :width="550" />
    </div>
  </div>
</template>

<style scoped></style>
