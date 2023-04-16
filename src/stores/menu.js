import { ref } from 'vue';
import { defineStore } from 'pinia';
import http from '@/utils/http.js';

export default defineStore(
  'menu',
  () => {
    const menuInfo = ref([]);
    const menuUrl = ref([]);
    let menuInfoObj = {
      menuIdx: '',
      parIdx: '',
      menuName: '', //메뉴명
      menuLevel: '', //메뉴레벨
      menuUrl: '', //메뉴url
      menuAuth: 'UNAUTH', //메뉴권한(비로그인(디폴트)/로그인[모든권한]/로그인[A권한]/로그인[B권한] 페이지)
      // unauth,auth,auth_a,auth_b
    };
    let menuUrlObj = { menuIdx: '', menuUrl: '' };

    // 메뉴정보 저장
    const regMenu = (params = []) => {
      menuInfo.value = params;
    };
    // 메뉴정보 확인
    const getMenu = (params = []) => {
      return menuInfo;
    };

    // 메뉴조회 API
    const menuListApi = (params = {}) => {
      let res = () => {
        return new Promise(function (resolve) {
          resolve([
            {
              menuIdx: '001',
              parIdx: '',
              menuName: '사이트맵', //메뉴명
              menuLevel: '0', //메뉴레벨(0뎁스(메뉴노출없음),1뎁스(대메뉴))
              menuUrl: '', //메뉴url
              menuAuth: 'UNAUTH', //메뉴권한(비로그인(디폴트)/로그인[모든권한]/로그인[A권한]/로그인[B권한] 페이지)
              // unauth,auth,auth_a,auth_b
            },
            {
              menuIdx: '002',
              parIdx: '',
              menuName: '1번메뉴', //메뉴명
              menuLevel: '1', //메뉴레벨(0뎁스(메뉴노출없음),1뎁스(대메뉴))
              menuUrl: '/menu01', //메뉴url
              menuAuth: 'UNAUTH', //메뉴권한(비로그인(디폴트)/로그인[모든권한]/로그인[A권한]/로그인[B권한] 페이지)
              // unauth,auth,auth_a,auth_b
            },
            {
              menuIdx: '003',
              parIdx: '',
              menuName: '2번메뉴', //메뉴명
              menuLevel: '1', //메뉴레벨(0뎁스(메뉴노출없음),1뎁스(대메뉴))
              menuUrl: '/menu02', //메뉴url
              menuAuth: 'UNAUTH', //메뉴권한(비로그인(디폴트)/로그인[모든권한]/로그인[A권한]/로그인[B권한] 페이지)
              // unauth,auth,auth_a,auth_b
            },
          ]);
        });
      };
      res().then((res) => {
        // console.log('res', res);
        regMenu(res);
      });
      // http.postApi().then((res) => {
      //   console.log('res', res);
      //   regMenu(res);
      // });
    };

    return { menuInfo, getMenu, regMenu, menuListApi };
  },
  {
    persist: true, //로컬스토리지 저장기능 셋팅
  }
);
