import { RouteRecordRaw } from 'vue-router';

const Layout = () => import('@/layout/index.vue');
const routeName = 'dashboard';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/console',
    component: Layout,
    meta: {
      sort: 1,
      isRoot: true,
      isMenu: true,
      title: 'Dashboard',
    },
    children: [
      {
        path: 'console',
        name: `${routeName}_console`,
        meta: {
          title: '主控台',
          isMenu: true,
        },
        component: () => import('@/views/dashboard/console/index.vue'),
      },
      {
        path: 'workspace',
        name: `${routeName}_workspace`,
        meta: {
          title: '工作台',
          isMenu: true,
        },
        component: () => import('@/views/dashboard/workspace/index.vue'),
      },
    ],
  },
];

export default routes;
