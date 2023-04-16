import { createI18n } from 'vue3-i18n';
import messagesList from '@/utils/i18n/ko.json';
import messagesList2 from '@/views/_msg/_msg.json';

// 객체 머지
Object.assign(messagesList.ko, messagesList2.ko);
Object.assign(messagesList.en, messagesList2.en);
// console.log('messagesList---', messagesList);
// console.log('messagesList2---', messagesList2);

const i18n = createI18n({
  locale: 'ko',
  messages: messagesList,
});

// console.log(i18n.t('api-error.code-01'));
// console.log(i18n.t('api-error.code-02'));

const ins = {
  msg: (code = 'api-error.code-01', params = {}) => {
    return i18n.t(code, params);
  },
  // 메세지 코드목록 조회
  getMsgList: () => {
    return messagesList;
  },
};

export default ins;
