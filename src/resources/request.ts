import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { AuthKey } from 'common/const';

const client = axios.create({
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': AuthKey
  }
});

const request = (payload: AxiosRequestConfig) => {
  return client(payload).then((response) => {
    if (response && response.data) return Promise.resolve(response.data);
  }).catch((err) => {
    let msg = '';
    switch (err.response.status) {
      case 401:
        msg = 'Client Error';
        break;
      case 500:
        msg = 'Server Error';
        break;
    }
    return Promise.reject({
      status: err.response.status,
      message: msg
    });
  });
}

export default request;