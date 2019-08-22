import axios from "axios";

const instance = axios.create({
  baseURL: "139.59.92.143:4000"
});
// instance.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     document.getElementById("loader").style.display = "block";
//     return config;
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// instance.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     document.getElementById("loader").style.display = "none";
//     return response;
//   },
//   function(error) {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

// Setting Auth token from local storage
const AUTH_TOKEN = localStorage.getItem("token");
if (AUTH_TOKEN) instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export default instance;
