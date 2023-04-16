import { createRouter, createWebHistory } from 'vue-router';
const IndexView = () => import('/multipage/page01/IndexView.vue');

let router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL + '/multipage/page01/'), // vite.config.js에 base옵션값과 동일
  routes: [
    {
      path: '/',
      name: '/',
      component: IndexView,
      meta: { unauthorized: false, layout: 'DefaultLayout' },
    },
  ],
});

export default router;
