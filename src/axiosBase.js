import axios from 'axios';

const axiosContact = axios.create({
    baseURL: 'https://contact-601f1.firebaseio.com/'
});

export default axiosContact;