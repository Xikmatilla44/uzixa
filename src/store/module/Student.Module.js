import StudentService from '../../service/Student.Service';

const state = {
    listStudent:'',
    testSave: false,
    findByIdStudent:[]

};

const getters = {
};

const actions = {

    async getStudentStore({commit}) {
        const res =await StudentService.getAllStudentService();
        commit('getStudent', res);
    },

    async postStudentStore({commit}, payloads){
        const  result = await StudentService.postStudentService(payloads);
        commit('postStudent', result);
    },

    async deleteStudentStore({commit}, id){
        const delRest = await StudentService.deleteStudentService(id);
        commit('deleteStudent', delRest);
    },

    async findByIdStudentStore({commit}, id){
        const Rest = await StudentService.FindBYIDStudentService(id);
        commit('RestStudent', Rest);
    },

    async putStudentStore({commit}, payloads){
        const putRest = await StudentService.putStudentService(payloads);
        commit('putStudent', putRest);
    },

    async getByNameStudentStore({commit}, name){
        const getRest = await StudentService.getByNameStudentService(name);
        commit('getByName', getRest);
    }

};

const mutations = {
     getStudent(state, res) {
        state.listStudent = res.data;
    },

    postStudent(state, result){
        if (result.status == 200) {
            state.testSave = true;
        }
    },

    deleteStudent(state,delRest){
         debugger
        if (delRest.status == 200) {
            state.testSave = true;
        }
    },

    RestStudent(state,Rest){
         state.findByIdStudent = Rest.data;
    },

    putStudent(state, putRest){

    },


    getByName(state, getRest){
        state.listStudent = getRest.data;

    }





};

export const Student= {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
