import { RouteRecordRaw } from 'vue-router';

const Layout = () => import('@/layout/index.vue');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'about',
    component: Layout,
    meta: {
      sort: 10,
      isRoot: true,
      isMenu: true,
      title: '关于',
    },
    children: [
      {
        path: 'index',
        name: `about_index`,
        meta: {
          title: '关于我',
          isMenu: true,
        },
        component: () => import('@/views/about/index.vue'),
      },
    ],
  },
];

export default routes;
