import request from './request';

export default {
  getAllVehicle: () => request({
    method: 'get',
    url: '/api/Vehicle'
  }),
  getVehicle: (id: string) => request({
    method: 'get',
    url: `/api/Vehicle/${id}`
  })
};