<script>
import emitter from '@/utils/emitter.js';
export default {
  components: {},
  setup() {
    const btnClick = () => {
      emitter.comm_errorPopRef_close();
    };

    const init = function () {
      // console.log('getShowLoading-----', showLoading.value);
    };

    // 초기화
    init();

    return {
      btnClick,
    };
  },
};
</script>

<template>
  <div
    style="
      position: absolute;
      background-color: gray;
      width: 500px;
      height: 500px;
      top: 50px;
    "
  >
    <button @click="btnClick">닫기</button>
    <h1>팝업, 시스템에러가 발생했습니다.</h1>
  </div>
</template>

<style lang="scss" scoped></style>
