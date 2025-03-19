<script setup>
const props = defineProps({
  registerModal: Boolean,
});

const emit = defineEmits(["update:registerModal"]);
</script>

<template>
  <el-dialog
    :model-value="registerModal"
    title="Sign Up!"
    align-center
    style="
      font-family: bold;
      width: 400px;
      padding: 30px;
      background-color: #f3f4f8;
      border-radius: 20px;
    "
    @close="emit('update:registerModal', false)"
  >
    <el-text style="font-family: regular">
      Register your details to get started
    </el-text>

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
      <el-text style="font-family: regular; font-size: 14px"> Email </el-text>
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
        <Message />
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
        placeholder="Enter your email"
      />
    </div>

    <div style="margin-top: 10px; width: 100%; text-align: right">
      <el-text style="font-family: regular; font-size: 14px"> Phone </el-text>
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
        <Phone />
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
        placeholder="Enter phone number"
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
        placeholder="Enter your password"
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
    >
      S I G N U P
    </el-button>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
