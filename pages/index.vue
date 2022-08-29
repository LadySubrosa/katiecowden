<template>
  <section class="container">
    <handlogo />
    <!-- <instagramFeed /> -->
  </section>
</template>

<script>
import handlogo from '~/components/handlogo.vue'
// import instagramFeed from '~/components/instagramFeed.vue'

export default {
  layout: 'home',
  components: {
    // handlogo, instagramFeed
    handlogo
  }
}
</script>

<style lang="css">
header.globalheader {
  padding-bottom: 0 !important;
}
header.globalheader img {
  width: 300px;
}
</style>
