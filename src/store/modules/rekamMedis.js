import axios from 'axios';
import store from '@/store/';
import router from '../../router'

const state = {
    CONST_PASIENID: 1,
    CONST_TRANSKLINIKID: 1,

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
        const res_pasien = await axios.get(store.state.URL_API + "/pasien/" + state.CONST_PASIENID, {
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

    async saveRekamMedis({ commit }) {
        state.postData['transklinik_id'] = state.CONST_TRANSKLINIKID;
        state.postData['pasien_id'] = state.CONST_PASIENID;

        if (state.postData['pemeriksaan_is_draw']) {
            state.postData['pemeriksaan_draw'] = state.canvas_pemeriksaan.toDataURL("image/png");
        }

        if (state.postData['diagnosa_is_draw']) {
            state.postData['diagnosa_draw'] = state.canvas_diagnosa.toDataURL("image/png");
        }

        if (!state.postData['agreement']) {
            return alert('Anda belum menyetujui pernyataan...');
        }

        if (!state.postData['next_konsultasi']) {
            return alert('Anda belum mimilih waktu konsultasi selanjutnya...');
        }

        console.log('Postdata: ', state.postData);

        try {
            const res = await axios.post(
                store.state.URL_API + "/rekam_medis",
                { ...state.postData  },
                {
                    headers: {
                        Authorization:
                            "Bearer " + store.state.BEARER_TOKEN,
                        "Content-Type": "application/json"
                    }
                }
            );

            console.log('Response: ', res.data);

            router.push({
              path: "/"
            });

        } catch (err) {
            console.log(err);
        }

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
        if (payload.key === 'PEMERIKSAAN') {
            state.canvas_pemeriksaan = payload.value;
        }

        if (payload.key === 'DIAGNOSA') {
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
