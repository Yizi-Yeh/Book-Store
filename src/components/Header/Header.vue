<template>
  <div class="header">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <div class="navbar-item field">
              <Search></Search>
            </div>
          </div>
        </div>

        <!-- For mobile and tablet -->
        <div v-show="isMenuOpen" class="navbar-end is-hidden-tablet">
          <Menu></Menu>
        </div>

        <!-- For desktop -->
        <div class="navbar-end is-hidden-mobile">
          <Menu></Menu>
        </div>

      </nav>
    </div>
  </div>
</template>

<script>
import Menu from './Menu'
import Search from './Search'

export default {
  name: 'Header',
  props: ['title'],
  data () {
    return {
      isMenuOpen: false
    }
  },
  created () {},
  components: {
    Search,
    Menu
  }
}
</script>

<style lang="scss" scoped>
@import "./header.scss";
</style>
