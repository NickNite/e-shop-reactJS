import axios from 'axios';

const baseURL = 'https://react-eshop-393a3.firebaseio.com';

export const productApi = {
    getTables() {
        return axios.get(`${baseURL}/tables.json`)
            .then(response => response.data)
    },
    getChairs() {
        return axios.get(`${baseURL}/chairs.json`)
            .then(response => response.data)
    }
};
