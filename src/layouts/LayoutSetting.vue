<script>
// import { ref, reactive, computed, watch, markRaw } from 'vue';
// import { useRouter, useRoute, RouterView } from 'vue-router';
import { computed, onMounted, onUnmounted, ref, watch, markRaw } from 'vue';
import { useRoute, RouterView } from 'vue-router';

// 레이아웃 설정
import { useHead } from '@vueuse/head';
import favicon from '@/assets/images/favicon.ico';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import SkeletorComponent from '@/components/SkeletorComponent.vue';

export default {
  components: {
    SkeletorComponent,
    RouterView,
  },
  setup() {
    // html head 셋팅
    useHead({
      title: 'publish_vite_vue3_boilerplate 프레임워크',
      htmlAttrs: {
        lang: 'ko',
      },
      link: {
        rel: 'icon',
        href: favicon,
      },
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'publish_vite_vue3_boilerplate 프레임워크',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'publish_vite_vue3_boilerplate 프레임워크',
        },
      ],
    });

    // 레이아웃 셋팅
    const route = useRoute();
    const layout = ref();
    const showRouterView = ref(false);

    watch(
      () => route.meta?.layout,
      async (metaLayout) => {
        showRouterView.value = false;
        try {
          // 레이아웃파일 목록
          const layoutImportList = import.meta.glob('./*Layout.vue');

          for (const path in layoutImportList) {
            let layoutName = metaLayout ? metaLayout : '';
            // console.log('layoutName-----', layoutName);
            if (path.indexOf(layoutName) > 0) {
              // console.log('path-----', layoutName);
              let layoutLoad = await layoutImportList[path]();
              layout.value = markRaw(layoutLoad.default);
            } else if (path.indexOf(layoutName) == 0) {
              layout.value = markRaw(DefaultLayout);
            }
          }
        } catch (e) {
          layout.value = markRaw(DefaultLayout);
        }
        showRouterView.value = true;
      },
      { immediate: true }
    );

    return {
      layout,
      showRouterView,
    };
  },
};
</script>

<template>
  <SkeletorComponent />
  <component :is="layout">
    <RouterView v-if="showRouterView"></RouterView>
  </component>
</template>

<style lang="scss" scoped></style>
