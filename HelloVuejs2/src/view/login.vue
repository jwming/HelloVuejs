<template>
    <div class="u-block-center">
        <button v-on:click="Login()" class="btn btn-primary">Login</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            Login: function() {
                this.$router.push("/stage/todo");
            }
        }
    }
</script>

<style scoped>
    .u-block-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>



