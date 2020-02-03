<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>

    <div class="right menu">
      <template v-if="isLoggedIn">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a @click="logout" class="item">Logout</a>
      </template>

      <a v-else class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>