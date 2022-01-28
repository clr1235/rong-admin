<template>
  <div class="header">
    <n-breadcrumb>
      <template v-for="item in breadcrumbList" :key="item.key">
        <n-breadcrumb-item>
          <span class="link-text">
            {{ item.meta.title }}
          </span>
        </n-breadcrumb-item>
      </template>
    </n-breadcrumb>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    // 当前匹配的路由
    const router = useRouter();
    // 处理面包屑
    const generator = (routerMap) => {
      return routerMap?.map((item) => {
        const currentMenu = {
          ...item,
          label: item.meta.title,
          key: item.name,
          disabled: item.path === '/',
        };
        // 是否有子菜单，并递归处理
        if (item.children && item.children.length > 0) {
          currentMenu.children = generator(item.children, currentMenu);
        }
        return currentMenu;
      });
    };
    const breadcrumbList = computed(() => {
      return generator(router.currentRoute.value.matched);
    });
    return {
      breadcrumbList,
    };
  },
});
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;
  flex: 1;
  padding: 10px 20px;
}
</style>
