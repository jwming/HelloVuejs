import Vue from "vue"
import VueRouter from "vue-router"

import Login from "../view/login.vue"
import Stage from "../view/stage.vue"
import Todo from "../view/todo.vue"
import About from "../view/about.vue"

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: "/", component: Login },
        { path: "/login", component: Login },
        { path: "/stage", component: Stage,
            children: [
                { path: "todo", component: Todo },
                { path: "about", component: About }
            ]
        }
    ]
});
