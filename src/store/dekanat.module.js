import DekanatService from "../service/dekanat.service";
import EducationService from "../service/education.service";

const state = {
    listDekanat: [],
    getById:[],
    testDekanat:false
};
const getters = {}

const actions = {

   async getDekanatStore({commit}) {
       const  res =  await DekanatService.getAllDekanat();
        commit('GetDekanat', res.data);
    },


    async saveDekanatStore({commit}, payload){
        const resSave =await DekanatService.saveDekanatService(payload);
        commit('savePostDekanat', resSave.data);
    },

    async deleteDekanatStore({commit}, payload){
        const resdelete =await DekanatService.deleteDekanatService(payload);
        commit('deleteDekanat', resdelete.data);
    },

    async  getByIdDekanatStore({commit}, id){
        const resedite =await DekanatService.getByIdDekanatService(id);
        commit('editeDekanat', resedite.data);
    },

    async  putDekanatStore({commit}, payload){
        const resPut =await DekanatService.putDekanatService(payload);
        commit('PutDekanat', resPut);
    },

    async  getByNameDekanatStore({commit}, name){
        const resName =await DekanatService.getByNameDekanatService(name);
        commit('getByNameDekanat', resName);
    },

}
const mutations = {

    GetDekanat(state, res) {
            state.listDekanat= res;
    },

    savePostDekanat(state, resSave) {
            // debugger
            state.testDekanat= resSave;
    },
    deleteDekanat(state, resdelete){
        if (resdelete.status === 500){
            state.testDekanat = false;
        }else if(resdelete.status === 200)
        {
            state.testDekanat = true;
        }

    },

    editeDekanat(state, resedite){
        state.getById = resedite;
    },

    PutDekanat(state, resPut){},


    getByNameDekanat(state, resName){
      state.listDekanat = resName.data;
    },
};

export const dekanat = {

    namespaced: true,
    state,
    actions,
    mutations,
    getters


};
