<script>
import { ref, markRaw, nextTick } from 'vue';
import emitter from '@/utils/emitter.js';

export default {
  components: {},
  setup() {
    const errorPop = ref();
    const errorPopShow = ref(false);

    // 팝업오픈 셋팅
    emitter.on('comm_errorPopRef_open', (params) => {
      const compLoad = () => {
        let component = import(
          '@/components/errorContents/ErrorContentPop.vue'
        );
        return component;
      };

      compLoad().then((res) => {
        errorPop.value = markRaw(res.default);
        nextTick(() => {
          errorPopShow.value = true;
        });
      });
    });
    // 팝업닫기 셋팅
    emitter.on('comm_errorPopRef_close', (params) => {
      nextTick(() => {
        errorPopShow.value = false;
      });
    });

    return {
      errorPop,
      errorPopShow,
    };
  },
};
</script>

<template>
  <!-- 공통에러팝업 -->
  <component :is="errorPop" v-show="errorPopShow"></component>
</template>

<style lang="scss" scoped></style>
