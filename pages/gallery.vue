<template>
  <section class="container">
    <div>
 
      <h1 class="title">
        Gallery</h1>
      
      <gallery galleryName="Heroine Drawings" group="gal1" />
       <gallery galleryName="Heroine Drawings2" group="gal2" /> 
    </div>
  </section>
</template>

<script>
import gallery from '~/components/gallery.vue'
export default {
  components: {
    gallery
  }
}
</script>

