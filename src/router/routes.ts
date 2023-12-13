import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'comp1', component: () => import('components/theCarousel.vue') },
      { path: 'comp2', component: () => import('components/ThePage.vue') },
      { path: 'comp3', component: () => import('components/TheSiparis.vue') },
      { path: 'comp4', component: () => import('components/ThePage2.vue') },
      { path: 'comp5', component: () => import('components/TheSepet.vue') },
    ],
  },
  {
    path: '/sepet/',
    component: () => import('layouts/SatisLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TheSepet.vue') },
      { path: 'siparis', component: () => import('pages/TheSiparis.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
