import axios from 'axios'

const StudentService = {

    getAllStudentService() {
        return axios.get('http://localhost:8080/api/auth/Student');
    },

    postStudentService(payloads){
        return axios.post('http://localhost:8080/api/auth/saveStudent', payloads);
    },

    deleteStudentService(id) {
        debugger
    return axios.delete(`http://localhost:8080/api/auth/deleteStudent/${id}`);

    },

    FindBYIDStudentService(id) {
        // debugger
    return axios.get(`http://localhost:8080/api/auth/student/${id}`);

    },

    putStudentService(payloads) {
        // debugger
    return axios.put(`http://localhost:8080/api/auth/StudentPut/${payloads.id}`, payloads);

    },

    getByNameStudentService(name) {
        debugger
    return axios.get(`http://localhost:8080/api/auth/StudentByName/${name}`);

    }


};

export default StudentService;
