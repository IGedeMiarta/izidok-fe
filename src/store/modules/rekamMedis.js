import axios from 'axios';
import store from '@/store/'

const state = {
    pasien: {},
    organs: [],
    penyakits: [],
    postData: {},
    canvas_pemeriksaan: null,
    canvas_diagnosa: null
};

const getters = {
    pasien: state => state.pasien,
    organs: state => state.organs,
    postData: state => state.postData,
    canvas_pemeriksaan: state => state.canvas_pemeriksaan,
    canvas_diagnosa: state => state.canvas_diagnosa,
};

const actions = {
    async fetchData({ commit }) {
        const res_pasien = await axios.get(store.state.URL_API + "/pasien/1", {
            headers: {
                Authorization:
                    "Bearer " + store.state.BEARER_TOKEN,
                "Content-Type": "application/json"
            }
        });

        const res_organs = await axios.get(store.state.URL_API + "/organ", {
            headers: {
                Authorization:
                    "Bearer " + store.state.BEARER_TOKEN,
                "Content-Type": "application/json"
            }
        });

        commit('setPasien', res_pasien.data);
        commit('setOrgans', res_organs.data);
    },

    updateAnamnesa({ commit }, payload) {
        commit('setPostData', payload);
    },

    updatePostData({ commit }, payload) {
        commit('setPostData', payload);
    },

    updateCanvas({ commit }, payload) {
        commit('setCanvas', payload);
    },

    saveRekamMedis({ commit }) {
        console.log('canvas pemeriksaan', state.canvas_pemeriksaan.toDataURL("image/png"));
        console.log('canvas diagnosa', state.canvas_diagnosa.toDataURL("image/png"));
        console.log(state.postData);
    }
};

const mutations = {
    setPasien: (state, pasien) => (state.pasien = pasien.data),
    setOrgans: (state, organs) => (state.organs = organs.data.organ),
    setPostData: (state, payload) => {
        state.postData[payload.key] = payload.value;
        // console.log(state.postData);
    },
    setCanvas: (state, payload) => {
        if(payload.key === 'PEMERIKSAAN'){
            state.canvas_pemeriksaan = payload.value;
        }

        if(payload.key === 'DIAGNOSA'){
            state.canvas_diagnosa = payload.value;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
