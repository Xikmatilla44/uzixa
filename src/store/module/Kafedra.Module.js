import KafedraService from "../../service/kafedra.Service";

const state = {
  AllKafedra:[]
};

const getters = {
};

const actions = {

    async getKafedraStore({commit}) {
        const res =await KafedraService.getAllKafedraService();
        commit('getKafedra', res);
    },

    async postKafedraStore({commit}, payload) {
        const resPost =await KafedraService.postKafedraService(payload);
        commit('postKafedra', resPost);
    },




};

const mutations = {

    getKafedra(state, res) {
        debugger
        state.AllKafedra = res.data;
    },

    postKafedra(state, resPost){

    }


};

export const Kafedra = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
