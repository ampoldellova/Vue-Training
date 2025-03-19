<script setup lang="ts">
import logo from "../assets/icon.png";
import { ref } from "vue";

const cartDrawer = ref(false);

// console.log(cartDrawer.value);
</script>

<template>
  <div
    style="
      justify-content: space-between;
      flex-direction: row;
      display: flex;
      align-items: center;
      height: 7.5%;
      padding-left: 2%;
      padding-right: 2%;
    "
  >
    <div style="display: flex">
      <el-image
        style="width: 40px; height: 40px; object-fit: cover"
        :src="logo"
      />
      <el-text
        style="
          font-family: bold;
          font-size: x-large;
          margin-left: 10px;
          color: #30b9b2;
        "
      >
        HalalExpress
      </el-text>
    </div>

    <div style="align-items: center; display: flex">
      <el-button
        style="
          background-color: #30b9b2;
          color: white;
          text-transform: none;
          font-family: regular;
        "
      >
        Login
      </el-button>
      <el-button
        style="
          border-color: #30b9b2;
          text-transform: none;
          font-family: regular;
          color: #30b9b2;
        "
      >
        Register
      </el-button>
      <el-icon
        style="
          color: #30b9b2;
          font-size: 30px;
          margin-left: 50px;
          cursor: pointer;
        "
        @click="cartDrawer = true"
      >
        <ShoppingBag />
      </el-icon>
    </div>
  </div>

  <CartDrawer v-model="cartDrawer" />
</template>
