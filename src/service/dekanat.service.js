import axios from 'axios'

const DekanatService = {

    getAllDekanat() {

        return axios.get('http://localhost:8080/api/auth/dekanat');
    },

    saveDekanatService(payload) {
        return axios.post('http://localhost:8080/api/auth/savedekanat', payload);

    },

    deleteDekanatService(id) {
        return axios.delete(`http://localhost:8080/api/auth/deleteDekanat/${id}`);

    },

    getByIdDekanatService(id) {
        return axios.get(`http://localhost:8080/api/auth/editeDekanat/${id}`);

    },

    putDekanatService(payload) {
        return axios.put(`http://localhost:8080/api/auth/dekanatPut/${payload.id}`,payload);

    },

    getByNameDekanatService(name) {
        return axios.get(`http://localhost:8080/api/auth/dekanatByName/${name}`);

    }


};

export default DekanatService;
