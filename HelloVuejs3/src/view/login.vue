<template>
    <div class="u-block-center">
        <i-button type="primary" icon="log-in" v-on:click="Login()">Login</i-button>
    </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
      Login: function() {
          this.$router.push('/stage/todo');
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

