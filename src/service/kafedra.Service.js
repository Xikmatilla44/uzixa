import axios from 'axios'

const KafedraService = {

    getAllKafedraService() {

        return axios.get('http://localhost:8080/api/auth/AllKafedra');
    },

    postKafedraService(payload) {
        return axios.post('http://localhost:8080/api/auth/saveKafedra', payload);
    }


};

export default KafedraService;
