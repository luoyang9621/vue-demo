import Vue from 'vue';
import { Button, Field, List, Cell, CellGroup } from 'vant';
// import vconsole from 'vconsole';
import App from './App.vue';
import router from './router/router';
import store from './store';
// import commonDemo1 from './mixins/commonDemo1';
import './untils';
import { myToast, myToast2 } from './plugins/myToast';

Vue.config.productionTip = false;

Vue.use(myToast);
Vue.use(myToast2);

Vue.use(Button).use(Field).use(List).use(Cell).use(CellGroup);
// new vconsole();
// Vue.mixin(commonDemo1);
import 'vant/lib/index.css';
import './style/app.scss';


new Vue({
  store,
  // mixins: [commonDemo1],
  router,
  render: h => h(App),
}).$mount('#app');
