import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill' // 为了让IE支持Vuex

import todo from './todo.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todo: todo
    }
});
