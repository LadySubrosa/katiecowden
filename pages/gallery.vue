<template>
  <section class="container">
    <div>
 
      <h1 class="title">
        Gallery</h1>
      
      <gallery :galleryContent="photos" />

       <gallery :galleryContent="lasercut" />
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
      lasercut: galleryContent.lasercut
    }
  }
}
</script>

