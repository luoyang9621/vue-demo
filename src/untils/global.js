import axios from './../axios';
// console.log('axios11', axios.get);

export default {
    f2() {
      console.log('你调用了global函数f2');
    },
    get: axios.get,
    post: axios.post,
    getToken() {
      return localStorage.token;
    },
    getPermissionList() {
      return localStorage.permission ? JSON.parse(localStorage.permission) : [];
    },
    getPermissionObj() {
      const list = this.getPermissionList();
      const obj = {};
      list.forEach(item => {
        obj[item.permission] = item;
      });
      return obj;
    },
}