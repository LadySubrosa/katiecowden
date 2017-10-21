<template>
<div class="gallery">
  <h2>{{ galleryName }}</h2>
  <p>{{ galleryDescription }}</p>
  <div class="gallery-images" >

    <img v-for="image in images" class="thumbnail" v-img="{ src: path+'/fullsize/'+image, group, title: galleryName }" :src="path+'/thumbnail/'+image" />
  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      galleryName: this.galleryContent.galleryName,
      galleryDescription: this.galleryContent.galleryDescription,
      images: this.galleryContent.galleryImages,
      path: this.galleryContent.path,
      options: {
        closeText: 'Close'
      }
    }
  },
  props: ['galleryContent'],
  components: {

  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style lang="scss">
  .gallery-images .thumbnail {
    display: inline-block;
    width: 200px;
    height: 200px;
    background-size: 150%;

  }
</style>