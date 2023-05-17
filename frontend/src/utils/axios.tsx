import axios from 'axios';
// import qs from 'qs';
const devBaseUrl = 'http://ec2-18-176-37-212.ap-northeast-1.compute.amazonaws.com:8080';
const BASE_URL = devBaseUrl;
const TIMEOUT = 50000;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

// instance.defaults.transformRequest = [
//   function (data, headers) {
//     // Do whatever you want to transform the data
//     let contentType = headers['Content-Type'] || headers['content-type'];
//     if (!contentType) {
//       contentType = 'application/json';
//       headers['Content-Type'] = 'application/json';
//     }

//     if (contentType.indexOf('multipart/form-data') >= 0) {
//       return data;
//     }

//     if (contentType.indexOf('application/x-www-form-urlencoded') >= 0) {
//       console.log(qs.stringify(data));
//       return qs.stringify(data);
//     }

//     return JSON.stringify(data);
//   }
// ];

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    console.log(error);
    // console.log(`err msg: ${error.response.data}`);

    return Promise.reject(error);
  }
);

export default instance;