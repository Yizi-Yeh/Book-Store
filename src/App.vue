<template>
  <Header />
  <Main />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>
<script>
import Header from '@/components/Header/Header.vue'
import Main from '@/components/Main.vue'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  setup () {
    const store = useStore()

    const init = () => {
      store.dispatch('fetchLocations')
      store.dispatch('fetchStores')
    }

    onMounted(() => {
      init()
    })

    return {}
  }
}
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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
