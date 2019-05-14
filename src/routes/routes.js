import Home from '../views/Home.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { isHeader: true },

  },
  {
    path: '/listen/:id',
    name: 'listen',
    component: () => import('../views/Listen.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '*',
    component: () => import('../views/Error.vue'),
  },
  // {
  // path: '/about',
  // name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  // },
];
