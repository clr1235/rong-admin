import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue'),
    meta: {
      sort: 10,
      isRoot: true,
      activeMenu: 'about_index',
      isMenu: true,
      title: '关于',
    },
    children: [
      {
        path: 'index',
        name: `about_index`,
        meta: {
          title: '关于首页',
          isMenu: true,
          activeMenu: 'about_index',
        },
        component: () => import('@/views/about/index.vue'),
      },
    ],
  },
];

export default routes;
