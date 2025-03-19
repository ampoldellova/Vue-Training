<script setup>
const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <el-drawer
    :model-value="modelValue"
    :with-header="false"
    @close="emit('update:modelValue', false)"
  >
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <el-icon
        style="color: #30b9b2; font-size: 30px; cursor: pointer"
        @click="emit('update:modelValue', false)"
      >
        <CircleCloseFilled />
      </el-icon>
      <el-text style="font-family: bold; font-size: 30px"> Your Cart </el-text>
    </div>
  </el-drawer>
</template>

<style lang="scss" scoped></style>
