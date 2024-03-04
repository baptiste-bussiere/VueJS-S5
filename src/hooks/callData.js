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

  const fetchActorDetails = async (actorId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/actors/${actorId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching actor details:', error);
      return null;
    }
  };


  return {
    ...toRefs(state),
    fetchData,
    fetchActorDetails

  };
};

export default callData;
