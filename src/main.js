import Vue from 'vue'
import FastClick from 'fastclick'
import '@style/element-variables.scss';
import Element from 'element-ui';
import App from './App';
import router from '@router';
import store from '@store';
import '@style/app.scss';

import mock from '@/mock';

Vue.use(Element, { size: 'small'})


FastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app');


