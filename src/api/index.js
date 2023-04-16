import axios from 'axios';
const api_url = import.meta.env.VITE_API_URL;
// console.log('api_url----', api_url);
// axios 인스턴스를 생성합니다.
const instance = axios.create({
  baseURL: api_url,
  timeout: 3 * 1000,
});
/*
    1. 요청 인터셉터
    2개의 콜백 함수를 받습니다.
*/
instance.interceptors.request.use(
  function (config) {
    // 요청 성공 직전 호출됩니다.
    // axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
    return config;
  },
  function (error) {
    // 요청 에러 직전 호출됩니다.
    return Promise.reject(error);
  }
);

/*
  2. 응답 인터셉터
  2개의 콜백 함수를 받습니다.
*/
instance.interceptors.response.use(
  function (response) {
    /*
      http status가 200인 경우
      응답 성공 직전 호출됩니다. 
      .then() 으로 이어집니다.
    */
    return response;
  },

  function (error) {
    /*
      http status가 200이 아닌 경우
      응답 에러 직전 호출됩니다.
      .catch() 으로 이어집니다.    
    */

    // console.log('instance.interceptors.response error----', error);
    // 200 제외한 나머지 -> 에러발상, catch에서 제어
    // 401 -> 로그인 페이지로 이동
    // 404 -> 디폴트 에러페이지로 이동
    // 500 -> 디폴트 에러페이지로 이동
    // axios타임아웃 에러 -> 디폴트 에러페이지로 이동
    // 네트워크에러 -> 디폴트 에러페이지로 이동

    // let errRes = {
    //   code: '500',
    //   errorMsg: '에러발생',
    // };
    // if (error) {
    //   //
    // }
    return Promise.reject(error);
  }
);
export default instance;
