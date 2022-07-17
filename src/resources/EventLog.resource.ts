import request from './request';

export default {
  getEvents: () => request({
    method: 'get',
    url: '/api/EventMsg'
  })
};