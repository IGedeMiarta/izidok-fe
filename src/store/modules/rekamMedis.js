import axios from 'axios';
import store from '@/store/';
import router from '@/router';

const getDefaultState = () => {
    return {
        asien: {},
        organs: [],
        penyakits: [],
        pasien: {},
        postData: {},
        transaksi: {},
        canvas_pemeriksaan: null,
        canvas_diagnosa: null,
        canvas_anamnesa: null,
        canvas_tatalaksana: null,
        canvas_pemeriksaan_penunjang: null,
        saving_params: {
            is_email: false,
            is_saving: false,
            is_saved: false,
            is_agree: false,
            is_next_konsul: false,
            is_kuotanotnull: false,
            is_email_format: true,
        }
    }
};

const state = getDefaultState();

const getters = {
    trx: state => state.transaksi,
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
    // call at the first time to reset the state
    resetState({ commit }) {
        // console.log('reset state called...');
        commit('resetState')
    },

    // get initial data from backend
    async fetchData({ commit, dispatch }) {
        // console.log('fetch data called...');

        dispatch('resetState');

        const pasien_id = router.currentRoute.params.pasien_id;
        const transklinik_id = router.currentRoute.params.transklinik_id;

        // update transklinik (antrean) status to "KONSULTASI"
        const TransStatus = await axios.put(
            store.state.URL_API + "/transaksi/" + transklinik_id, {
            status: 'KONSULTASI'
        });

        // console.log(TransStatus.data)
        commit('setTransaksi', TransStatus.data.data)

        // console.log('Rawat Jalan Status: ', TransStatus.data.data.status);

        // get pasien data (Tensi, BB, TB, Respirasi, Sistole, Diastole)
        const res_pasien = await axios.get(store.state.URL_API + "/pasien/" + pasien_id);

        commit('setPasien', res_pasien.data);
    },

    // this function called from Anamnesa.vue
    updateAnamnesa({ commit }, payload) {
        commit('setPostData', payload);
    },

    // preparing the payload to send to backend
    updatePostData({ commit }, payload) {
        commit('setPostData', payload);
    },

    // this function called on canvas changed
    updateCanvas({ commit }, payload) {
        commit('setCanvas', payload);
    },

    // this function to update (next konsul & agreement)
    updateSavingParams({ commit }, payload) {
        commit('setIsSaving', payload);
    },

    //saving rekam medis
    async saveRekamMedis({ commit, state }) {
        // console.log('save rekam-medis called...');

        // get pasien_id and transklinik_id from the route
        const pasien_id = router.currentRoute.params.pasien_id;
        const transklinik_id = router.currentRoute.params.transklinik_id;

        state.postData['transklinik_id'] = transklinik_id;
        state.postData['pasien_id'] = pasien_id;

        // if canvas is draw, send to backend
        // start
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
        // end

        // agreement
        // if (!state.postData['agreement']) {
        //     commit('setIsSaving', { key: 'is_agree', value: false });
        //     return;
        // }

        // next konsul
        if (!state.postData['next_konsultasi']) {

            commit('setIsSaving', { key: 'is_next_konsul', value: false });
            return;
        }
      if (state.postData['tgl_next_konsultasi' === false]) {

        commit('setIsSaving', { key: 'is_next_konsul', value: false });
        return;
      }

      // if (state.postData['tgl_next_konsultasi'] === null) {
      //   commit('setIsSaving', { key: 'tgl_next_konsultasi', value: false });
      //   return;
      // }

      if (state.saving_params['is_email_format'] === false) {
        commit('setIsSaving', { key: 'is_email', value: false });
        return;
      }

      //
      // if (!state.postData['email_pengingat']) {
      //   commit('setIsSaving', { key: 'is_email_format', value: false });
      //   return;
      // }
      // if (this.saving_params.is_email_format === false) {
      //   return this.$swal({
      //     type: "error",
      //     title: "Oops...",
      //     text: 'Silahkan lengkapi Email Pengingat!'
      //   });
      // }


      // email
    //   if (!state.postData['email_konsultasi']) {
    //     commit('setIsSaving', { key: 'is_email', value: false });
    //     return;
    //   }

        // console.log(state.postData);

        // process send to backend
        try {



          commit('setIsSaving', { key: 'is_saving', value: true });

            const res = await axios.post(
                store.state.URL_API + "/rekam_medis",
                { ...state.postData }
            );

            // const sendEmail = await axios.post(
            //     store.state.URL_API + "/email/reminder",
            //     { ...state.postData }
            // );

          console.log(res.data.message)
            if (res.data.message === "success") {
                commit('setIsSaving', { key: 'is_saved', value: true });
              commit('setIsSaving', { key: 'is_kuotanotnull', value: true });
              const TransStatus = await axios.put(
                store.state.URL_API + "/transaksi/" + transklinik_id, {
                  status: 'SELESAI'
                });
              return res.data;

            }

             if (res.data.message === "Qouta telah habis") {
               commit('setIsSaving', { key: 'is_kuotanotnull', value: false });
               commit('setIsSaving', { key: 'is_saved', value: true });
             }

          commit('setIsSaving', { key: 'is_saving', value: false });

            // if successful, update transklinik (antrean) status to "SELESAI"

            console.log('Rawat Jalan Status: ', TransStatus.data.data.status);



        } catch (err) {
            commit('setIsSaving', { key: 'is_saving', value: false });
            // console.log(err);
        }

    }

};

const mutations = {
    resetState(state) {
        Object.assign(state, getDefaultState())
    },
    setPasien: (state, pasien) => (state.pasien = pasien.data),
    setTransaksi: (state, transData) => (state.transaksi = transData),
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
