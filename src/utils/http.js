import instance from '@/api/';
import emitter from '@/utils/emitter.js';

const http = {
  // api호출 기능
  request(headers = {}, method = 'post', url = '', data = {}) {
    return instance({
      headers: headers,
      method: method,
      url: url,
      data: data,
    })
      .then((result) => result.data)
      .catch((result) => {
        return Promise.reject(result);
      });
  },
  // get방식 api호출
  get(url = '', headers = {}, param = {}) {
    console.log('get 호출');
    return this.request(headers, 'get', url, param);
  },
  // post방식 api호출
  post(url = '', headers = {}, param = {}) {
    console.log('post 호출');
    return this.request(headers, 'post', url, param);
  },
  // 보완필요, 파일등록 api 호출
  postFile(url = '', headers = {}, param = {}) {
    console.log('postFile 호출');
    let reqHeaders = Object.assign(
      { 'Content-Type': 'multipart/form-data' },
      headers
    );

    console.log('headers 값', reqHeaders);
    return this.request(reqHeaders, 'post', url, param);
  },
  // axios all 호출
  reqAll(promises = []) {
    return Promise.all(promises);
  },
  // post방식 api호출(api메세지규격 적용)
  postApi(url = '', param = {}, setting = { errorPopShow: true }) {
    // console.log('post 호출');
    let headers = {};
    let reqParams = {
      header: { channel: 'spcweb' },
      data: { ...param },
    };
    return this.request(headers, 'post', url, reqParams)
      .then((resultData) => {
        // 정상,업무 오류
        return httpError.succError(resultData);
      })
      .catch((result) => {
        //시스템 오류
        return httpError.systemError(result, setting.errorPopShow);
      });
  },
};
const httpError = {
  succError: (resultData) => {
    let res = {};
    if (resultData.error) {
      res = resultData.error;
    } else {
      res = resultData.result;
    }
    return res;
  },
  systemError: (result, errorPopShow = true) => {
    let httpStatus = 500;
    let dataError = {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
    };
    try {
      httpStatus = result.response.status;
      dataError = result.response.data.error;
      if (httpStatus >= 400 && httpStatus <= 500) {
        //...
        if (errorPopShow) {
          // alert('시스템 에러발생');
          emitter.comm_errorPopRef_open();
        }
      } else {
        //...
      }
    } catch (error) {
      // ...
    }
    return Promise.reject(dataError);
  },
};
export default http;
