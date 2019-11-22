import Vue from 'vue';
import global from './global';
import filters from './../filters';
import directive from './../directive';

Object.keys(global).forEach((fn) => {
   Vue.prototype[`$${fn}`] = global[fn];
});

Object.keys(filters).forEach((fn) => {
    Vue.filter(fn, filters[fn]);
});

Object.keys(directive).forEach((fn) => {
   Vue.directive(fn, directive[fn]);
});
