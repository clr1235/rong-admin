import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// 读取文件中的路由
const modules = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules)?.forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

function sortRoute(a, b) {
  return (a.meta?.sort || 0) - (b.meta?.sort || 0);
}
// 路由排序
routeModuleList.sort(sortRoute);
// 基本路由
const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/views/home/index.vue'),
    meta: {},
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {},
  },
];

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: [...baseRoutes, ...routeModuleList],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
