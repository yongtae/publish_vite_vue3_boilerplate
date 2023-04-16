<script>
import { ref, watch, getCurrentInstance } from 'vue';

export default {
  components: {},
  setup(props, context) {
    let col = ['01'];
    const { proxy } = getCurrentInstance();
    const router = proxy.$router;

    const btnClick = (e) => {
      console.log('btnClick');
    };
    // <template> 사용 변수
    return {
      btnClick,
    };
  },
};
</script>

<template>
  <h1>publish_vite_vue3_boilerplate 첫 화면</h1>
</template>

<style lang="scss" module scoped></style>
