<template>
  <div
    style="
      padding-left: 10%;
      padding-right: 10%;
      margin-top: 20px;
      justify-content: space-between;
      display: flex;
    "
  >
    <el-text style="font-family: bold; font-size: 30px; color: black"
      >Restaurants</el-text
    >
    <el-text style="font-size: 30px; cursor: pointer">🍽️</el-text>
  </div>
  <div style="display: flex; justify-content: center">
    <el-carousel
      type="card"
      height="350px"
      style="width: 80%"
      :autoplay="false"
    >
      <el-carousel-item
        v-for="restaurant in restaurants"
        :key="restaurant._id"
        style="
          justify-content: center;
          background-color: white;
          border-radius: 15px;
        "
      >
        <el-image
          style="
            width: 100%;
            height: 200px;
            border-radius: 15px;
            border-width: 1px;
            border-color: black;
          "
          :src="restaurant.imageUrl"
          fit="cover"
        />
        <div
          style="
            font-family: bold;
            padding: 10px;
            justify-content: space-between;
            display: flex;
            align-items: center;
          "
        >
          <div style="display: flex">
            <el-image
              style="
                width: 50px;
                height: 50px;
                object-fit: cover;
                border-radius: 5px;
                border-color: black;
                border-width: 1px;
              "
              :src="restaurant.logoUrl"
            />
            <el-text style="color: black; font-size: 30px; margin-left: 10px">
              {{ restaurant.title }}
            </el-text>
          </div>
          <div>
            <el-text
              style="
                color: white;
                font-size: 20px;
                background-color: #30b9b2;
                padding-left: 12px;
                padding-right: 12px;
                border-radius: 15px;
                font-family: medium;
              "
            >
              {{ restaurant.isAvailable ? "Open" : "Close" }}
            </el-text>
          </div>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            padding-left: 10px;
            padding-right: 10px;
          "
        >
          <el-text
            style="
              color: #83829a;
              font-size: 30px;
              font-family: regular;
              font-size: 20px;
            "
          >
            Delivery under:
          </el-text>
          <el-text
            style="
              color: #83829a;
              font-size: 30px;
              margin-left: 10px;
              font-family: regular;
              font-size: 20px;
            "
          >
            {{ restaurant.time }} mins
          </el-text>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            padding-left: 10px;
            padding-right: 10px;
            margin-bottom: 20px;
          "
        >
          <el-rate v-model="restaurant.rating" size="large" disabled />
          <el-text style="font-family: regular; font-size: 20px; color: #83829a"
            >{{ restaurant.ratingCount }} + ratings</el-text
          >
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { restaurants } from "../assets/data.js";
</script>

<style scoped>
::v-deep .el-rate .el-rate__item .el-rate__icon {
  font-size: 25px; /* Change this to your desired size */
}
</style>
