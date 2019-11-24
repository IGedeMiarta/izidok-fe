import axios from 'axios';

const state = {
    pasien: {},
    organs: [],
    kodePenyakit: []
};

const getters = {
    dataPasien: state => state.pasien,
    dataOrgans: state => state.organs,
    dataKodePenyakit: state => state.kodePenyakit
};

const actions = {
    async fetchPasien({ commit }) {
        const response = await axios.get("http://localhost:9000/api/v1/pasien/1", {
            headers: {
                Authorization:
                    "Bearer RnkySmZJRUg5bHYzODNpS1d1UnV4ajJ0ZFpGSVhrVlVUTVNzY0N1Qg==",
                "Content-Type": "application/json"
            }
        });

        commit('setPasien', response.data);
    },
    async fetchOrgans({ commit }) {
        const response = await axios.get("http://localhost:9000/api/v1/organ", {
            headers: {
                Authorization:
                    "Bearer RnkySmZJRUg5bHYzODNpS1d1UnV4ajJ0ZFpGSVhrVlVUTVNzY0N1Qg==",
                "Content-Type": "application/json"
            }
        });
        commit('setOrgans', response.data);
    },
    // async saveRekamMedis({ commit }, data){
    //     console.log(data);
    // },
    updateAnamnesa({ commit }, data) {
        commit('setAnamnesa', data);
    },

    updateDiagnosa({ commit }, data) {
        commit('setDiagnosa', data);
    },

};

const mutations = {
    setPasien: (state, pasien) => (state.pasien = pasien.data),
    setOrgans: (state, organs) => (state.organs = organs.data.organ),
    setAnamnesa: (state, data) => {
        state.pasien[data.target.id] = data.target.value;
    },
    setDiagnosa: (state, data) => {
        state.kodePenyakit = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
