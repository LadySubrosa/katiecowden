<template>
  <div id="page">

    <globalheader />
    <nuxt/>
    <globalfooter />
  </div>
</template>

<script>
import globalfooter from '~/components/globalfooter.vue'
import globalheader from '~/components/globalheader.vue'

export default {
  layout: 'home',
  components: {
    globalfooter, globalheader
  }
}
</script>
