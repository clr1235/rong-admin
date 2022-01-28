<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <RouterView />
  </NConfigProvider>
</template>

<script lang="ts">
import { GlobalThemeOverrides } from 'naive-ui';
import { defineComponent } from 'vue';
import { useProjectSettingStore } from '@/store/modules/projectSetting';

export default defineComponent({
  setup() {
    // 主题变量
    const { appTheme } = useProjectSettingStore();
    const themeOverrides: GlobalThemeOverrides = {
      common: {
        primaryColor: appTheme,
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
