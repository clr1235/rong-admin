<template>
  <div class="logo">
    <img src="~@/assets/images/logo.png" alt="" :class="{ 'mr-2': !collapsed }" />
    <h2 v-show="!collapsed" class="title">RongAdmin</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    collapsed: {
      type: Boolean,
    },
  },
});
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;
  img {
    width: auto;
    height: 32px;
  }
  .mr-2 {
    margin-right: 20px;
  }
  .title {
    margin-bottom: 0;
    margin-top: 0;
  }
}
</style>
