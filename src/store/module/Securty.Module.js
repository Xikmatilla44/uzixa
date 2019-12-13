import SecurtyService from '../../service/Securty.Service';

const state = {
    TokenList:'',
    testHiddin: false,
    errorMessage:''

};

const getters = {
};

const actions = {



    async TestHiddin({commit}) {
        const res =await SecurtyService.testToken();
        commit('TestHid', res);
    }
};

const mutations = {

   async TestHid(state, res) {
        // debugger
        state.testHiddin =await res;
    },


};

export const SecurtyModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
