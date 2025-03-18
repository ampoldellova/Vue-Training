<template>
  <div
    style="
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      cursor: pointer;
    "
  >
    <div v-for="category in categories" :key="category.id" style="margin: 30px">
      <!-- Center the image -->
      <div>
        <el-image
          :src="category.imageUrl"
          style="display: block; margin: 0 auto"
        />
      </div>
      <!-- Center the title -->
      <div>
        <el-text style="margin-top: 10px; display: block; font-family: regular">
          {{ category.title }}
        </el-text>
      </div>
    </div>
  </div>
</template>

<script>
import { ElText } from "element-plus";
import ricebowl from "../assets/categories/riceBowl.png";
import friedchicken from "../assets/categories/friedChicken.png";
import burgers from "../assets/categories/burgers.png";
import curry from "../assets/categories/curry.png";
import pizza from "../assets/categories/pizza.png";
import pasta from "../assets/categories/pasta.png";
import beverages from "../assets/categories/beverages.png";
import more from "../assets/categories/more.png";

export default {
  setup() {
    const categories = [
      { id: 1, title: "Fried Rice", imageUrl: ricebowl },
      { id: 2, title: "Fried Chicken", imageUrl: friedchicken },
      { id: 3, title: "Burgers", imageUrl: burgers },
      { id: 4, title: "Curry", imageUrl: curry },
      { id: 5, title: "Pizza", imageUrl: pizza },
      { id: 6, title: "Pasta", imageUrl: pasta },
      { id: 7, title: "Beverages", imageUrl: beverages },
      { id: 8, title: "More...", imageUrl: more },
    ];

    return { categories };
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
