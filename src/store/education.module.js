// eslint-disable-next-line no-unused-vars
import EducationService from "../service/education.service";

const state = {
    listEducation: [],
    getById:[]
};

const getters = {
};

const actions = {

    async getEducationsStore({commit}) {
        const res = await EducationService.getAllEducations();

        commit('GetEducation', res.data);
    },

    async deleteStoreEducation({commit}, id) {
        const resDelete =await EducationService.deleteEducationService(id);
        commit('deleteRes', resDelete);
    },

   async getByNameEducation({commit}, name){
        const resGetBy =await EducationService.getByNameEducationService(name);
        commit('getByName', resGetBy.data);
    },

    saveEducationStore({commit}, payload){
        const resSave = EducationService.saveEducationService(payload);
        commit('savePost', resSave.data);
    },
   async updateEDUStore({commit}, id){
        const resUpd =await EducationService.updateEDUService(id);
        commit('upDate', resUpd.data);
    },
    updatePost({commit},payload){
        const updateRes = EducationService.updatePostService(payload);
        commit('upDatePost', updateRes.data);
    }
}

const mutations = {
    upDatePost(state,res){

    },
    GetEducation(state, res) {
        debugger
        state.listEducation = res;
    },

    deleteRes(state, res) {
    },

    getByName(state, resGetBy){
        state.listEducation = resGetBy;
    },

    savePost(state, resSave){
    },

    upDate(state, resUpd){
        debugger
        state.getById = resUpd;
    }


}

export const education = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
