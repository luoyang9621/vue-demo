import Vuex from 'vuex';
import Vue from 'vue';
import moduleA from './moduleA';
import moduleB from './moduleB';

Vue.use(Vuex);


const store = new Vuex.Store({
    ss: '111',
    modules: {
        moduleA,
        moduleB,
    },

});

export default store;