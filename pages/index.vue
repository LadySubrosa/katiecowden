<template>
  <section class="container">
       <handlogo />
  </section>
</template>

<script>
import handlogo from '~/components/handlogo.vue'

export default {
  layout: 'home',
  components: {
    handlogo
  }
}
</script>


<style lang="scss">
header.globalheader {
  padding-bottom: 0 !important;
  img {
    width: 200px;
  }
}
</style>
