import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import router from './router/router.js'
import store from './store/store.js'
import Main from './view/main.vue'

Vue.use(iView);

new Vue({
    el: '#main',
    store: store,
    router: router,
    render: function (h) { return h(Main); }
});