<script>
import ErrorPop from '@/components/ErrorPop.vue';
export default {
  components: { ErrorPop },
  setup() {
    const init = function () {
      // console.log('getShowLoading-----', showLoading.value);
    };

    // 초기화
    init();
  },
};
</script>

<template>
  <div class="header">DefaultLayout 헤더영역</div>
  <br />
  <slot />
  <br />
  <div class="footer">DefaultLayout 푸터영역</div>

  <ErrorPop />
</template>

<style lang="scss" scoped>
.header {
  border: 1px solid red;
}
.footer {
  border: 1px solid blue;
}
</style>
