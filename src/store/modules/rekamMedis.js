import axios from 'axios';
import store from '@/store/';
import router from '@/router'

const state = {
    CONST_PASIENID: 1,
    CONST_TRANSKLINIKID: 1,

    pasien: {},
    organs: [],
    penyakits: [],
    postData: {},
    canvas_pemeriksaan: null,
    canvas_diagnosa: null,
    canvas_anamnesa: null
};

const getters = {
    pasien: state => state.pasien,
    organs: state => state.organs,
    postData: state => state.postData,
    canvas_pemeriksaan: state => state.canvas_pemeriksaan,
    canvas_diagnosa: state => state.canvas_diagnosa,
    canvas_anamnesa: state => state.canvas_anamnesa,
};

const actions = {
    async fetchData({ commit }) {
        const pasien_id = router.currentRoute.params.pasien_id;

        const res_pasien = await axios.get(store.state.URL_API + "/pasien/" + pasien_id);

        const res_organs = await axios.get(store.state.URL_API + "/organ");

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
                { ...state.postData  }
            );

            console.log('Response: ', res.data);

            router.push({
              path: "/pembayaran"
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

        if (payload.key === 'ANAMNESA') {
            state.canvas_anamnesa = payload.value;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
