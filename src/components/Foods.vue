<script setup>
import { foods } from "../assets/data.js";
</script>

<template>
  <div style="padding-left: 10%; padding-right: 10%">
    <div
      style="margin-top: 30px; justify-content: space-between; display: flex"
    >
      <el-text style="font-family: bold; font-size: 30px; color: black"
        >Available Foods</el-text
      >
      <el-text style="font-size: 30px; cursor: pointer">🍲</el-text>
    </div>
    <div style="display: flex; justify-content: space-between">
      <div
        v-for="food in foods"
        :key="food._id"
        style="
          margin-top: 20px;
          display: flex;
          margin: 10px;
          justify-content: center;
          flex-wrap: wrap;
        "
      >
        <div style="cursor: pointer">
          <div>
            <el-image
              :src="food.imageUrl"
              style="
                width: 200px;
                height: 200px;
                object-fit: cover;
                border-radius: 15px;
              "
            />
          </div>
          <div>
            <div>
              <el-text
                style="font-family: regular; font-size: 12px; color: #83829a"
              >
                {{ food.restaurant.title }}
              </el-text>
            </div>
            <div>
              <el-text style="font-family: bold; font-size: 16px; color: black">
                {{ food.title }}
              </el-text>
            </div>
            <div>
              <el-text
                style="font-family: regular; font-size: 14px; color: #83829a"
              >
                ₱ {{ food.price }}
              </el-text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
