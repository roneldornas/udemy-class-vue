import api from '../../api/imgur';
import router from '../../router';

const state = {
    images: [],
};

const getters = {
    getImages: state => state.images,
};

const actions = {
    fetchImages: async ({ rootState, commit }) => {
        const { auth: { token } } = rootState;

        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },

    uploadImages: async ({ rootState }, images) => { 
        const { auth: { token } } = rootState;

        await api.uploadImages(images, token);
        
        router.push('/');
     },
};

const mutations = {
    setImages: (state, images) => state.images = images,
};

export default {
    state,
    getters,
    actions,
    mutations,
}