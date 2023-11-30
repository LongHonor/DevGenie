import axios from 'axios';
import qs from 'qs';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  // baseURL: 'https://11b98282-0147-4754-a897-0a4fe81dcd8b.mock.pstmn.io',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'accept': 'application/json,',
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  },
});

export default apiClient;
