<template>
  <div ref="menu">侧边栏menu {{ m }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from 'vue';

export default defineComponent({
  setup(props, { attrs, slots, emit, expose }) {
    // console.log(props, 'props===>>>');
    // attrs（非响应式对象，等同于attrs）
    // console.log(attrs, 'attrs===>>>');
    // 插槽（非响应式对象，等同于slots）
    // console.log(slots, 'slots===>>>');
    // 触发事件（方法，等同于emit）
    // console.log(emit, 'emit===>>>');
    // 暴露公共的 property （是个函数）
    // console.log(expose, 'expose===>>>');
    /**
      因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。
      换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。
      这些函数接受一个回调函数，当钩子被组件调用时将会被执行
    */
    // onBeforeMount(() => {
    //   console.log('onBeforeMount is used');
    // });
    const menu = ref(null);
    const m = 'ususu';
    onMounted(() => {
      console.log(menu, 'onMounted-=-=----');
    });
    watchEffect(
      () => {
        console.log(menu.value, 'ref------');
      },
      {
        flush: 'post',
      }
    );
    // onBeforeUpdate(() => {});
    // onUpdated(() => {});
    // onBeforeUnmount(() => {});
    // onUnmounted(() => {});
    // onErrorCaptured(() => {});
    // onRenderTracked(() => {});
    // onRenderTriggered(() => {});
    // onActivated(() => {});
    // onDeactivated(() => {});
    return {
      menu,
      m,
    };
  },
});
</script>

<style lang="less" scoped>
</style>
