import { defineStore } from 'pinia';
import { ref } from 'vue';
export default defineStore('skele', () => {
  let showLoading = ref(true);

  const getShowLoading = () => {
    return showLoading.value;
  };
  const setShowLoading = (param = false) => {
    showLoading.value = param;
  };
  return { showLoading, getShowLoading, setShowLoading };
});
