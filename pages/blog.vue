<template>
  <section class="container">
    <div>
 
      <h1 class="title">
        Blog</h1>

        <tumblrBlog :blogName="krakatoakatie" />
    </div>
  </section>
</template>

<script>
import tumblrBlog from '~/components/tumblrBlog.vue'

export default {
  components: {
    tumblrBlog
  }
}
</script>

