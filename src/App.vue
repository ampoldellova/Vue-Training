<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <RouterView />
  <!-- <HomePage /> -->
</template>

<style scoped>
/* Add any scoped styles here */
</style>
