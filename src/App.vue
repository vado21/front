<template>
<v-app>
    <navigation-bar/>
    <router-view/>
  </v-app>
</template>

<script>
import navigationBar from './components/navigationBar';
import homeView from './views/HomeView.vue';

export default {
  name: 'App',

  components: {
    navigationBar,
    homeView
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
