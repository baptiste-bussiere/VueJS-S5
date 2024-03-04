// hooks/callData.js
import { reactive, toRefs } from 'vue';
import axios from 'axios';

const callData = () => {
  const state = reactive({
    data: null,
    loading: false,
    error: null
  });


  const config = {
    headers: {
      'Accept': 'application/json',
    }
  }

  const fetchData = async (url) => {
    state.loading = true;
    try {
      const response = await axios.get(url, config);
      console.log(response.data);
      state.data = response.data;
    } catch (error) {
      state.error = error;
    } finally {
      state.loading = false;
    }
  };
  

  return {
    ...toRefs(state),
    fetchData
  };
};

export default callData;
