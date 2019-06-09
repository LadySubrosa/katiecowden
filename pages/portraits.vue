<template>
  <section id="gallery" class="container">
    <div>

      <h1 class="title">
        Portraits</h1>
      <gallery :galleryContent="photos" />
    </div>
  </section>
</template>

<script>
import gallery from '~/components/gallery.vue'
import galleryContent from '~/static/gallery.json'
export default {
  components: {
    gallery
  },
  data () {
    return {
      photos: galleryContent.portrait
    }
  }
}
</script>

<style lang="scss">
#gallery {
  .gallery-content {
    padding-top: 1em;
  }
  h2 {
    line-height: 1em;
    margin-bottom: .5em;
  }
  p {
    margin-bottom: 1em;
    font-size: 1.25em;
    line-height: 1.5em;
  }
}

</style>
