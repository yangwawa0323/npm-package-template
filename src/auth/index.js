/** @format */

export const getTokenEtag = () => [
  localStorage.getItem('token'),
  localStorage.getItem('etag'),
];

export const cleanTokenEtag = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('etag');
};

/* eslint-disable no-param-reassign */
export const withTokenHeader = (axiosInstance) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    'token',
  )}`;
  axiosInstance.defaults.headers.common.Etag = localStorage.getItem('etag');
};

export const cors = (axiosInstance) => {
  axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
};
/* eslint-enable no-param-reassign */

export const corsConfig = (method) => ({
  method: method || 'GET',
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  credentials: 'same-origin',
});

const defaults = {
  withTokenHeader,
  cors,
  corsConfig,
  getTokenEtag,
  cleanTokenEtag,
};

export default defaults;
