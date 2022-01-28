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
      inverted
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <Logo :collapsed="collapsed" />
      <AsideMenu v-model:collapsed="collapsed" />
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered>
        <Header class="layout-header" />
      </n-layout-header>
      <n-layout-content>
        <div class="layout-main">
          <Main />
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AsideMenu } from './components/AsideMenu';
import { Logo } from './components/Logo';
import { Header } from './components/Header';
import { Main } from './components/Main';

const collapsed = ref<boolean>(false);
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  flex-direction: row;
  flex: auto;
  &-header {
  }
  &-main {
  }
}
</style>
