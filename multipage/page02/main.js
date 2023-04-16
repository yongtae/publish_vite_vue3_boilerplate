import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from '@/App.vue';
import router from './router'; //router 파일위치
import { createHead } from '@vueuse/head'; // 퍼블영역

const app = createApp(App);
const head = createHead();
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(head); // 퍼블영역

// vue 인스턴스, router 접근변수
window.__VUE_APP_ROUTER = router;
// vue 인스턴스, Native(모바일앱) 통신 기능
window.__VUE_APP_NATIVE = {};
app.mount('#app');
