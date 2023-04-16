<script>
import { ref, watch } from 'vue';
import { Skeletor } from 'vue-skeletor';
import { storeToRefs } from 'pinia';
import skele from '@/stores/skele.js';

export default {
  components: { Skeletor },
  setup() {
    let showView = ref(false);

    const { showLoading } = storeToRefs(skele());
    watch(showLoading, () => {
      console.log(
        '----------SkeletorComponent.vue, changed----',
        showLoading.value
      );
      showView.value = !showLoading.value;
    });

    const init = function () {
      // console.log('getShowLoading-----', showLoading.value);
    };

    // 초기화
    init();

    // <template> 사용 변수
    return { showView, showLoading };
  },
};
</script>

<template>
  <div v-show="showLoading">
    <span><Skeletor circle size="100" /></span>
    <span><Skeletor width="200" /></span><br />
    <span><Skeletor width="200" /></span><br />
    <span><Skeletor width="200" /></span>

    <span><Skeletor circle size="100" /></span>
    <span><Skeletor width="200" /></span><br />
    <span><Skeletor width="200" /></span><br />
    <span><Skeletor width="200" /></span>
  </div>
</template>

<style lang="scss" scoped>
// 퍼블영역
@import 'vue-skeletor/dist/vue-skeletor.css';
</style>
