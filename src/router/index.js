import { createRouter, createWebHistory } from 'vue-router';
// 공통에러팝업 제어
import emitter from '@/utils/emitter.js';
// 스켈레톤 셋팅
import skele from '@/stores/skele.js';

let routesList = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  //   meta: { unauthorized: false, layout: 'DefaultLayout' },
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue'),
  // },
];
// 라우터 추가('_*_routes.js 파일' 자동추가)
const routeImportList = import.meta.glob('./_*_routes.js', { eager: true });
// console.log('routeImportList----------', routeImportList);
for (const path in routeImportList) {
  // console.log('routeImportList[path]-----', ...routeImportList[path].default);
  routesList.push(...routeImportList[path].default);
}

// views폴더의 router 정보 등록
const routeImportChnelList = import.meta.glob(
  '@/views/**/_routers/_*_routes.js',
  {
    eager: true,
  }
);
for (const path in routeImportChnelList) {
  routesList.push(...routeImportChnelList[path].default);
}

let router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // vite.config.js에 base옵션값과 동일
  routes: routesList,
});

/////////////////////////////////////////////////////////
// router 기능 모듈화
// console.log('router.currentRoute----', router.currentRoute);
// 뒤로이동
router._back = () => {
  router.back(-1);
};
// 앞페이지 이동
router._forward = () => {
  router.forward();
};
// 리플레이스 기능, history 추가 없음
router._replace = (type = 'query', pathParam, reqParams) => {
  let paramInfo = {
    path: pathParam,
    query: reqParams,
  };
  if (type == 'query') {
    // 기본값 동일
  } else if (type == 'params') {
    paramInfo = {
      path: pathParam,
      params: reqParams,
    };
  }
  router.replace(paramInfo);
};
// 페이지 이동
router._go = (num = 0) => {
  router.go(num);
};
// query 파라메터값 확인
router._getQueryParam = () => {
  return router.currentRoute._value.query;
};
// params 파라메터값 확인
router._getPushParam = () => {
  return router.currentRoute._value.params;
};
// params 파라메터,리플레시 이슈 존재
router._push = (pathParam = '', reqParams = {}) => {
  router.push({
    name: pathParam,
    params: reqParams,
  });
};
// query 파라메터 이동
router._query = (pathParam = '', queryParam = {}) => {
  router.push({
    path: pathParam,
    query: queryParam,
  });
};
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// [보완필요] 라우터가드 설정, 인가처리(url별 권한 체크)

// 라우터에 들어가기 전에 실행되는 가드
router.beforeEach((to, from, next) => {
  // 공통에러팝업 닫기
  emitter.emit('comm_errorPopRef_close');

  // 인증필요 페이지 확인
  if (
    to.matched.some(function (routeInfo) {
      return routeInfo.meta.unauthorized;
    })
  ) {
    // 이동할 페이지에 인증 정보가 필요하면 경고 창을 띄우고 페이지 전환은 하지 않음
    alert('Login Please!');
  } else {
    // console.log("routing success : '" + to.path + "'");
    next(); // 페이지 전환
  }
  // 스켈레톤 노출
  // skele().setShowLoading(true);
});

// 컴포넌트 가드가 끝난 후에 실행되는 가드
router.beforeResolve((to, from, next) => {
  // console.log('router.beforeResolve-------------');
  // setTimeout(() => {
  //   console.log('스켈레톤 숨김,setTimeout----');
  //   // 스켈레톤 숨김
  //   skele().setShowLoading(false);
  // }, 2000);
  // skele().setShowLoading(false);
  next();
});

// 라우트 이동이 해결된 후에 실행되는 가드
router.afterEach((to, from) => {
  // console.log('router.afterEach-------------');
});
/////////////////////////////////////////////////////////
export default router;
