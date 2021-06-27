<template>
  <div style="display: inherit;">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <!-- navbar items, navbar burger... -->
      </div>
      <div class="navbar-menu">
        <!-- navbar start, navbar end -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {}
  },
  computed: {
    isUserLoggedIn () {
      return true
    }
  },
  methods: {
    logout () {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
