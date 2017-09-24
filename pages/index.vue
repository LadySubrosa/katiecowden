<template>
  <section class="container">
    <div>
 
      <h1 class="title">
        Welcome</h1>

       <handlogo />
      
    </div>
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

