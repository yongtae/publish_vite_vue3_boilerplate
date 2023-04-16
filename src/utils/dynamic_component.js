import { markRaw } from 'vue';
const ins = {
  _import: (params) => {
    const compLoad = () => {
      return params;
    };
    return compLoad()
      .then((res) => {
        // console.log('_import.compLoad------', res.default);
        return markRaw(res.default);
      })
      .catch((error) => {
        console.log('_import.compLoad.catch------', error);
        return error;
      });
  },
};

export default ins;
