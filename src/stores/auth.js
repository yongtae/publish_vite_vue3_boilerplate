import { ref } from 'vue';
import { defineStore } from 'pinia';

export default defineStore(
  'auth',
  () => {
    const memInfo = ref({ userId: '', userName: '' });
    // 로컬스토리지 저장
    const login = (params = { userId: '', userName: '' }) => {
      memInfo.value.userId = params.userId;
      memInfo.value.userName = params.userName;
    };
    // 로컬스토리지 값 제거
    const logout = () => {
      memInfo.value.userId = '';
      memInfo.value.userName = '';
    };
    // 로그인여부
    const loginCheck = () => {
      console.log('memInfo.value.userId---', memInfo.value.userId);
      console.log('memInfo.value.userName---', memInfo.value.userName);
      let res = true;
      if (memInfo.value.userId == '') {
        res = false;
      }
      return res;
    };
    // 로그인 사용자 정보
    const getMemInfo = () => {
      return memInfo.value;
    };
    return { memInfo, login, logout, loginCheck, getMemInfo };
  },
  {
    persist: true, //로컬스토리지 저장기능 셋팅
  }
);
