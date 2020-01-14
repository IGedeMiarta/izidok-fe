import axios from 'axios';
import store from '@/store/';
import router from '@/router';

const getDefaultState = () => {
    return {
        asien: {},
        organs: [],
        penyakits: [],
        postData: {},
        canvas_pemeriksaan: null,
        canvas_diagnosa: null,
        canvas_anamnesa: null,
        canvas_tatalaksana: null,
        canvas_pemeriksaan_penunjang: null,
        saving_params: {
            is_saving: false,
            is_saved: false,
            is_agree: false,
            is_next_konsul: false
        }
    }
};

const state = getDefaultState();

const getters = {
    pasien: state => state.pasien,
    organs: state => state.organs,
    postData: state => state.postData,
    canvas_pemeriksaan: state => state.canvas_pemeriksaan,
    canvas_diagnosa: state => state.canvas_diagnosa,
    canvas_anamnesa: state => state.canvas_anamnesa,
    canvas_tatalaksana: state => state.canvas_tatalaksana,
    canvas_pemeriksaan_penunjang: state => state.canvas_pemeriksaan_penunjang,
    saving_params: state => state.saving_params,
};

const actions = {
    resetCartState({ commit }) {
        console.log('reset state called...');
        commit('resetState')
    },
    async fetchData({ commit, dispatch }) {
        console.log('fetch data called...');

        dispatch('resetCartState');

        const pasien_id = router.currentRoute.params.pasien_id;
        const transklinik_id = router.currentRoute.params.transklinik_id;

        const TransStatus = await axios.put(
            store.state.URL_API + "/transaksi/" + transklinik_id, {
            status: 'KONSULTASI'
        });

        console.log('Rawat Jalan Status: ', TransStatus.data.data.status);

        const res_pasien = await axios.get(store.state.URL_API + "/pasien/" + pasien_id);

        commit('setPasien', res_pasien.data);
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

    updateSavingParams({ commit }, payload) {
        commit('setIsSaving', payload);
    },

    async saveRekamMedis({ commit, state }) {
        console.log('save rekam-medis called...');
        const pasien_id = router.currentRoute.params.pasien_id;
        const transklinik_id = router.currentRoute.params.transklinik_id;

        state.postData['transklinik_id'] = transklinik_id;
        state.postData['pasien_id'] = pasien_id;

        if (state.postData['anamnesa_is_draw']) {
            state.postData['anamnesa_draw'] = state.canvas_anamnesa.toDataURL("image/png");
        }

        if (state.postData['pemeriksaan_is_draw']) {
            state.postData['pemeriksaan_draw'] = state.canvas_pemeriksaan.toDataURL("image/png");
        }

        if (state.postData['diagnosa_is_draw']) {
            state.postData['diagnosa_draw'] = state.canvas_diagnosa.toDataURL("image/png");
        }

        if (state.postData['tatalaksana_is_draw']) {
            state.postData['tatalaksana_draw'] = state.canvas_tatalaksana.toDataURL("image/png");
        }

        if (state.postData['pemeriksaan_penunjang_is_draw']) {
            state.postData['pemeriksaan_penunjang_draw'] = state.canvas_pemeriksaan_penunjang.toDataURL("image/png");
        }

        if (!state.postData['agreement']) {
            commit('setIsSaving', { key: 'is_agree', value: false });
            return;
        }

        if (!state.postData['next_konsultasi']) {
            commit('setIsSaving', { key: 'is_next_konsul', value: false });
            return;
        }

        console.log('post data:', state.postData);

        try {
            commit('setIsSaving', { key: 'is_saving', value: true });

            const res = await axios.post(
                store.state.URL_API + "/rekam_medis",
                { ...state.postData }
            );

            if (res.data.status) {
                commit('setIsSaving', { key: 'is_saved', value: true });
            }

            commit('setIsSaving', { key: 'is_saving', value: false });

            const TransStatus = await axios.put(
                store.state.URL_API + "/transaksi/" + transklinik_id, {
                status: 'SELESAI'
            });

            console.log('Rawat Jalan Status: ', TransStatus.data.data.status);

        } catch (err) {
            commit('setIsSaving', { key: 'is_saving', value: false });
            console.log(err);
        }

    }

};

const mutations = {
    resetState(state) {
        Object.assign(state, getDefaultState())
    },
    setPasien: (state, pasien) => (state.pasien = pasien.data),
    setOrgans: (state, organs) => (state.organs = organs.data.organ),
    setPostData: (state, payload) => {
        state.postData[payload.key] = payload.value;
    },
    setCanvas: (state, payload) => {
        if (payload.key === 'PEMERIKSAAN') {
            state.canvas_pemeriksaan = payload.value;
        }

        if (payload.key === 'DIAGNOSA') {
            state.canvas_diagnosa = payload.value;
        }

        if (payload.key === 'ANAMNESA') {
            state.canvas_anamnesa = payload.value;
        }

        if (payload.key === 'TATALAKSANA') {
            state.canvas_tatalaksana = payload.value;
        }

        if (payload.key === 'PEMERIKSAAN_PENUNJANG') {
            state.canvas_pemeriksaan_penunjang = payload.value;
        }
    },
    setIsSaving: (state, payload) => {
        state.saving_params[payload.key] = payload.value;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
