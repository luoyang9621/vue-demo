import myToastComponent from './myToast.vue';
const myToast = {
    install(Vue, options) {
        Vue.component('my-toast-component', myToastComponent);
    }
};
const myToast2 = {
    install(Vue, options) {
        Vue.prototype.$showMsg = function (val) {
            console.log('mytoast2=', val);
        };
    }
};
export { myToast , myToast2 };
