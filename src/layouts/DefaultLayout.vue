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
  <div class="cont"><slot /></div>
  <br />
  <div class="footer">DefaultLayout 푸터영역</div>

  <ErrorPop />
</template>

<style lang="scss" scoped>
.header {
  border: 1px solid rgb(58, 57, 57);
  padding: 20px;
}
.cont {
  border: 1px solid rgb(58, 57, 57);
  padding: 20px;
}
.footer {
  border: 1px solid rgb(58, 57, 57);
  padding: 20px;
}
</style>
