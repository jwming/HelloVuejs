<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <span class="navbar-brand">WebApp Demo with Vue.js</span>
                </div>

                <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/stage/todo">Todo</router-link></li>
                    <li><router-link to="/stage/about">About</router-link></li>
                    <li><router-link to="/login">Logout</router-link></li>
                </ul>
            </div>
        </nav>

        <div class="container u-main-container">
            <keep-alive><router-view></router-view></keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stage"
    }
</script>

<style scoped>
    .u-main-container {
        padding-top: 70px;
    }
</style>

