import VueLogger from 'vuejs3-logger';
import { createApp } from 'vue';

const options = {
  isEnabled: true,
  logLevel: 'debug',
  // logLevel: 'error',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: false,
  separator: '|',
  showConsoleColors: true,
};
// vue 인스턴스 생성
const appIns = createApp({}).use(VueLogger, options);

let size = 0;
console.log('appIns.memorySizeOf', size);

const ins = {
  _debug: (...args) => {
    // console.log('ddApp', appIns);
    appIns.$log.debug(args);

    // this.$log.debug('test', this.a, 123);
    // this.$log.info('test', this.b);
    // this.$log.warn('test');
    // this.$log.error('test');
    // this.$log.fatal('test');
  },
  _info: (...args) => {
    appIns.$log.info(args);
  },
  _warn: (...args) => {
    appIns.$log.warn(args);
  },
  _error: (...args) => {
    appIns.$log.error(args);
  },
  _fatal: (...args) => {
    appIns.$log.fatal(args);
  },
};

export default ins;
