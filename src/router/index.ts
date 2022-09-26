import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "add" */ '../views/Add.vue'),
    props: true,
  },
  {
    path: '/delete',
    name: 'Delete',
    component: () => import(/* webpackChunkName: "delete" */ '../views/Delete.vue'),
    props: true,
  },
  {
    path: '/filter',
    name: 'Filter',
    component: () => import(/* webpackChunkName: "filter" */ '../views/Filter.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
