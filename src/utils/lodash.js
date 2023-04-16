import size from 'lodash/size';
import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import { sortBy } from 'lodash';

const ins = {
  _size(params) {
    return size(params);
  },
  _cloneDeep(params) {
    return cloneDeep(params);
  },
  _merge(...args) {
    return merge(...args);
  },
  _sortBy(...args) {
    return sortBy(...args);
  },
  /*
   * 숫자열을 3자리마다 "," 표 찍기
   */
  _formatMoney(strNumber = '0', mode = 'INSERT') {
    var nLength = strNumber.length;
    var i = 0,
      j = 0;
    var strResult = '';
    if (mode == 'INSERT') {
      j = 0;
      for (i = nLength - 1; i >= 0; i--) {
        j++;
        strResult = strNumber.substring(i, i + 1) + strResult;
        if (j % 3 == 0 && i > 0) {
          strResult = ',' + strResult;
        }
      }
    } else if (mode == 'DELETE') {
      for (i = nLength - 1; i >= 0; i--) {
        if (strNumber.substring(i, i + 1) != ',') {
          strResult = strNumber.substring(i, i + 1) + strResult;
        }
      }
    }
    return strResult;
  },

  /*
   * 정규식으로 문자열이 이메일로 유효한지 패턴검사
   */
  _isEmail(value = '') {
    var format = '^([-.0-9a-zA-Z]+)@([-.0-9a-zA-Z]+).([a-zA-Z]+)$';
    if (value.search(format) != -1) {
      return true;
    }
    return false;
  },
  /*
   * 정규식으로 문자열이 일반전화번호로 유효한지 패턴검사
   */
  _isPhoneNumber(value = '') {
    var format = '^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$';
    if (value.search(format) != -1) {
      return true;
    }
    return false;
  },
  /*
   * 정규식으로 문자열이 헨드폰번호로 유효한지 패턴검사
   */
  _isMobileNumber(value = '') {
    var format = '^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$';
    if (value.search(format) != -1) {
      return true;
    }
    return false;
  },
};

export default ins;
