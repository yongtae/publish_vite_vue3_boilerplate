import mitt from 'mitt';
const emitter = mitt();

const mitter = {
  on(onName, callBack) {
    this.off(onName); // 멀티호출 제거
    emitter.on(onName, callBack);
    // emitter.on('test', this.onReceive); //-> ('key','함수')
  },
  emit(emitName, param) {
    emitter.emit(emitName, param);
    // emitter.emit('test', '전달 파라메터');
  },
  off(emitName) {
    emitter.off(emitName);
  },
  // 공통에러팝업 오픈 호출
  comm_errorPopRef_open() {
    emitter.emit('comm_errorPopRef_open', {});
  },
  // 공통에러팝업 닫기 호출
  comm_errorPopRef_close() {
    emitter.emit('comm_errorPopRef_close', {});
  },
};

export default mitter;
