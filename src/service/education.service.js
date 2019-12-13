import axios from 'axios'

const EducationService = {

    getAllEducations(){
        debugger
        return axios.get('http://localhost:8080/api/auth/education');
    },
    deleteEducationService(id){
        debugger
        return axios.delete(`http://localhost:8080/api/auth/delete/${id}`);
    },

    getByNameEducationService(name){

        debugger
        return axios.get(`http://localhost:8080/api/auth/name/${name}`);
    },

    saveEducationService(payload){

        debugger
        return axios.post('http://localhost:8080/api/auth/saveEducation', payload);

    },

    updateEDUService(id){
        debugger
        return axios.get(`http://localhost:8080/api/auth/education/${id}`);
    },

    updatePostService(payload){
        debugger
        return axios.put(`http://localhost:8080/api/auth/educationPut/${payload.id}`,payload);
    }


}

export default EducationService;
