<template>
  <div id="page">

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