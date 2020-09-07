import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/non-reactive',
    name: 'NonReactive',
    component: () => import('../views/NonReactive.vue'),
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: () => import('../views/Tooltip.vue'),
  },
  {
    path: '/deferred',
    name: 'DeferredLoad',
    component: () => import('../views/Deferred.vue'),
  },
  {
    path: '/crosshair',
    name: 'CrossHair',
    component: () => import('../views/CrossHair.vue'),
  },
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: () => import('../views/Dynamic.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
