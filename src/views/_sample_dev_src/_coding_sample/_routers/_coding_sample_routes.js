// 페이지 목록
//    pinia(store) 활용 소스 -> MenuStoreSample
//    vee-validate 활용 소스 -> ValidUseSample.vue
//    moment 활용 소스 -> MomentSample.vue
//    lodash 활용 소스 -> LodashSample.vue
//    vue-router 활용 소스 -> RouterSample.vue
//    axios 활용 소스 -> ApiSample.vue
//    mitt(이벤트버스) 활용 소스 -> EventbusSample.vue

const routes = [
  {
    path: '/_coding_sample/MenuStoreSample',
    name: '/_coding_sample/MenuStoreSample',
    component: () =>
      import('@/views/_sample_dev_src/_coding_sample/MenuStoreSample.vue'),
    meta: { unauthorized: false, layout: 'DefaultLayout' },
  },
  {
    path: '/_coding_sample/ValidUseSample',
    name: '/_coding_sample/ValidUseSample',
    component: () =>
      import('@/views/_sample_dev_src/_coding_sample/ValidUseSample.vue'),
    meta: { unauthorized: false, layout: 'DefaultLayout' },
  },

  {
    path: '/_coding_sample/ApiSample',
    name: '/_coding_sample/ApiSample',
    component: () =>
      import('@/views/_sample_dev_src/_coding_sample/ApiSample.vue'),
    meta: { unauthorized: false, layout: 'DefaultLayout' },
  },
  {
    path: '/_coding_sample/EventbusSample',
    name: '/_coding_sample/EventbusSample',
    component: () =>
      import('@/views/_sample_dev_src/_coding_sample/EventbusSample.vue'),
    meta: { unauthorized: false, layout: 'DefaultLayout' },
  },
  {
    path: '/_coding_sample/LodashSample',
    name: '/_coding_sample/LodashSample',
    component: () =>
      import('@/views/_sample_dev_src/_coding_sample/LodashSample.vue'),
    meta: { unauthorized: false, layout: 'DefaultLayout' },
  },
  {
    path: '/_coding_sample/MomentSample',
    name: '/_coding_sample/MomentSample',
    component: () =>
      import('@/views/_sample_dev_src/_coding_sample/MomentSample.vue'),
    meta: { unauthorized: false, layout: 'DefaultLayout' },
  },
  {
    path: '/_coding_sample/MenuStoreSample',
    name: '/_coding_sample/MenuStoreSample',
    component: () =>
      import('@/views/_sample_dev_src/_coding_sample/MenuStoreSample.vue'),
    meta: { unauthorized: false, layout: 'DefaultLayout' },
  },

  {
    path: '/_coding_sample/IndexView',
    name: '/_coding_sample/IndexView',
    component: () =>
      import('@/views/_sample_dev_src/_coding_sample/IndexView.vue'),
    meta: { unauthorized: false, layout: 'DefaultLayout' },
  },
  {
    path: '/_coding_sample/',
    name: '/_coding_sample/',
    component: () =>
      import('@/views/_sample_dev_src/_coding_sample/IndexView.vue'),
    meta: { unauthorized: false, layout: 'DefaultLayout' },
  },
];

export default routes;
