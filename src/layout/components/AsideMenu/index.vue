<template>
  <n-menu
    :collapsed="collapsed"
    :mode="mode"
    :value="activeMenu"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    @update:value="clickMenuItem"
  />
</template>

<script lang="ts">
import { defineComponent, h, ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { NIcon } from 'naive-ui';
import { BookOutline as BookIcon } from '@vicons/ionicons5';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
export default defineComponent({
  components: {},
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
    mode: {
      // 菜单模式
      type: String,
      default: 'vertical',
    },
    //位置
    location: {
      type: String,
      default: 'left',
    },
  },
  emits: ['update:collapsed'],
  setup() {
    // 当前路由
    const currentRoute = useRoute();
    const router = useRouter();
    let activeMenu = ref<string>(currentRoute.name || 'dashboard');
    // 读取所有路由
    const allRoutes = router.options.routes || [];
    // 从路由中读取菜单
    const getMenus = (arr) => {
      const menus = [];
      for (let item of arr) {
        if (item.meta.isMenu) {
          if (item?.children?.length > 0) {
            menus.push({
              label: item.meta.title,
              key: item.name,
              icon: item.meta.icon || renderIcon(BookIcon),
              children: getMenus(item.children),
            });
          } else {
            menus.push({
              label: item.meta.title,
              key: item.name,
              children: null,
            });
          }
        }
      }
      return menus;
    };
    // 点击菜单
    function clickMenuItem(key) {
      if (/http(s)?:/.test(key)) {
        window.open(key);
      } else {
        router.push({ name: key });
      }
    }
    // 跟随页面路由变化，切换菜单选中状态
    watchEffect(() => {
      activeMenu.value = currentRoute.name;
    });
    return {
      menuOptions: getMenus(allRoutes),
      activeMenu,
      clickMenuItem,
    };
  },
});
</script>

<style lang="less" scoped>
</style>
