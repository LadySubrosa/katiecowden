<template>
  <div id="page">
<header class="globalheader">
      <a href="/"><img src="~/static/fulllogo.jpeg" alt="Katie Cowden - Killer Queen Designs" width="400px" /></a>
    </header>
    <nuxt/>
    <globalfooter />
  </div>
</template>

<script>
import globalfooter from '~/components/globalfooter.vue'
export default {
  layout: 'home',
  components: {
    globalfooter
  }
}
</script>


<style lang="scss">
@import '~assets/scss/global.scss'
</style>