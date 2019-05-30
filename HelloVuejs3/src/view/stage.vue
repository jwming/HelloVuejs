<template>
    <div>
        <div class="u-navbar-fixed-top">
            <Row type="flex">
                <Col offset="4" span="8">
                    <Menu mode="horizontal" theme="light">
                        <MenuItem name="logo">WebApp Demo with Vue.js</MenuItem>
                    </Menu>
                </Col>

                <Col span="8">
                    <Menu mode="horizontal" theme="light">
                        <MenuItem name="todo">
                            <Icon type="clipboard" />
                            <router-link to="/stage/todo">Todo</router-link>
                        </MenuItem>
                        <MenuItem name="todo2">
                            <Icon type="clipboard" />
                            <router-link to="/stage/todo2">Todo2</router-link>
                        </MenuItem>
                        <MenuItem name="about">
                            <Icon type="help" />
                            <router-link to="/stage/about">About</router-link>
                        </MenuItem>
                        <MenuItem name="login">
                            <Icon type="log-out" />
                            <router-link to="/login">Logout</router-link>
                        </MenuItem>
                    </Menu>
                </Col>
            </Row>
        </div>

        <div class="u-main-container">
            <Row>
                <Col offset="4" span="16">
                    <keep-alive><router-view></router-view></keep-alive>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Stage'
    }
</script>

<style scoped>
    .u-navbar-fixed-top {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030;
    }

    .u-main-container {
        padding-top: 70px;
    }    
</style>

