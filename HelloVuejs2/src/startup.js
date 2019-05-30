import Vue from "vue"
import "bootstrap-loader/extractStyles"

import Main from "./view/main.vue"
import router from "./router/router.js"

new Vue({
    el: "#main",
    router: router,
    render: function(h) { return h(Main); }
});