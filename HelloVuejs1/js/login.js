Vue.component('u-login', {
    template: '\
        <div class="u-block-center">\
            <button v-on:click="Login()" class="btn btn-primary">Login</button>\
        </div>',

    methods: {
        Login: function() {
            window.location.href = "todo.html";
        }
    }
});