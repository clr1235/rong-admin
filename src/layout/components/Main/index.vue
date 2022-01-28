<template>
  <div class="main">
    <RouterView>
      <template #default="{ Component, route }">
        <transition name="zoom-fade" mode="out-in" appear>
          <keep-alive v-if="keepAliveComponents" :include="keepAliveComponents">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
          <component v-else :is="Component" :key="route.fullPath" />
        </transition>
      </template>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
// 需要缓存的组件
const keepAliveComponents = [];
</script>

<style lang="less" scoped>
.main {
  padding: 20px;
}
</style>
