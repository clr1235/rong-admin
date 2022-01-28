<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <RouterView />
  </NConfigProvider>
</template>

<script lang="ts">
import { GlobalThemeOverrides } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // 主题变量
    const themeOverrides: GlobalThemeOverrides = {
      common: {
        primaryColor: '#2d8cf0',
      },
    };
    return {
      themeOverrides,
    };
  },
});
</script>

<style lang="less">
@import 'styles/index.less';
</style>
