<template>
  <n-layout class="layout" has-sider position="absolute">
    <n-layout-sider
      class="layout-sider"
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      bordered
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <Logo :collapsed="collapsed" />
      <AsideMenu v-model:collapsed="collapsed" />
    </n-layout-sider>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AsideMenu } from './components/AsideMenu';
import { Logo } from './components/Logo';

const collapsed = ref<boolean>(false);
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  flex-direction: row;
  flex: auto;
}
</style>
