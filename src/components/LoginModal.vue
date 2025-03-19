<script setup>
const props = defineProps({
  loginModal: Boolean,
});

const emit = defineEmits(["update:loginModal"]);
</script>

<template>
  <el-dialog
    :model-value="loginModal"
    title="Welcome!"
    width="500"
    align-center
    style="
      font-family: bold;
      width: 400px;
      padding: 30px;
      background-color: #f3f4f8;
      border-radius: 20px;
    "
    @close="emit('update:loginModal', false)"
  >
    <el-text style="font-family: regular">Sign Up or Login to continue</el-text>

    <div style="margin-top: 10px; width: 100%; text-align: right">
      <el-text style="font-family: regular; font-size: 14px">
        Username
      </el-text>
    </div>
    <div
      style="
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
      "
    >
      <el-icon
        style="position: absolute; left: 10px; color: #83829a; font-size: 20px"
      >
        <User />
      </el-icon>

      <input
        style="
          border-width: 0px;
          height: 50px;
          width: 100%;
          font-family: regular;
          border-radius: 10px;
          padding-left: 40px;
        "
        placeholder="Enter username"
      />
    </div>

    <div style="margin-top: 10px; width: 100%; text-align: right">
      <el-text style="font-family: regular; font-size: 14px">
        Password
      </el-text>
    </div>
    <div
      style="
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
      "
    >
      <el-icon
        style="position: absolute; left: 10px; color: #83829a; font-size: 20px"
      >
        <Lock />
      </el-icon>
      <input
        style="
          border-width: 0px;
          height: 50px;
          width: 100%;
          font-family: regular;
          border-radius: 10px;
          padding-left: 40px;
        "
        placeholder="Enter password"
      />
    </div>

    <el-button
      style="
        font-family: bold;
        margin-top: 30px;
        width: 100%;
        background-color: #30b9b2;
        color: white;
        border-radius: 10px;
        height: 50px;
      "
      >L O G I N</el-button
    >
    <div style="margin-top: 20px; text-align: center">
      <el-text style="font-family: regular; color: #83829a; font-size: 14px">
        Dont have an account?
      </el-text>
      <el-text style="font-family: regular; color: #30b9b2; font-size: 14px">
        Signup
      </el-text>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
