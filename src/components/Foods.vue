<script setup>
import { ref, computed } from "vue";
import { foods } from "../assets/data.js";

const currentPage = ref(1);
const itemsPerPage = ref(6);

const paginatedFoods = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return foods.slice(start, end);
});

const handlePageChange = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <div style="padding-left: 10%; padding-right: 10%">
    <div
      style="margin-top: 30px; justify-content: space-between; display: flex"
    >
      <el-text style="font-family: bold; font-size: 30px; color: black">
        Available Foods
      </el-text>
      <el-text style="font-size: 30px; cursor: pointer">🍲</el-text>
    </div>
    <div style="display: flex; justify-content: space-between; flex-wrap: wrap">
      <div
        v-for="food in paginatedFoods"
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
              style="width: 200px; height: 200px; border-radius: 15px"
              fit="cover"
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
  <div
    style="
      justify-content: center;
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
    "
  >
    <el-pagination
      size="small"
      background
      layout="prev, pager, next"
      :total="foods.length"
      :page-size="itemsPerPage"
      :current-page="currentPage"
      @current-change="handlePageChange"
      class="mt-4"
    />
  </div>
</template>

<style scoped></style>
