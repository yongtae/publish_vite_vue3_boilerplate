const HomePage = () => import('@/views/HomePage.vue'); //Lazy 로딩 적용

const routes = [
  {
    path: '/',
    name: '/',
    component: HomePage,
    meta: { unauthorized: false, layout: 'DefaultLayout' },
  },
];

export default routes;
