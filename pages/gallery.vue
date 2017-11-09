<template>
  <section id="gallery" class="container">
    <div>
 
      <h1 class="title">
        Gallery</h1>
      <div class="gallery-content">
        <p>Katie specializes in <a href="#laser">lasercut pieces</a>, <a href="#photos">portrait photography</a>, and <a href="#embroidery">embroidery</a>.</p>
      </div>

      <gallery :galleryContent="lasercut" />

      <gallery :galleryContent="photos" />

      <gallery :galleryContent="embroidery" />

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
      photos: galleryContent.photos,
      lasercut: galleryContent.lasercut,
      embroidery: galleryContent.embroidery
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

