<template>
<div class="gallery">
  <h2>{{ galleryName }}</h2>
  <div class="gallery-images" >
    <img v-for="image in images" class="thumbnail" v-img="{ src: image.src, group, title: galleryName }" :src="image.src" />
  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        {
          'src': '001-hermione.png',
          'title': ''
        },
        {
          'src': '002-luna.png',
          'title': ''
        },
        {
          'src': '003-ginny.png',
          'title': ''
        },
        {
          'src': '004-fleur.png',
          'title': ''
        },
        {
          'src': '005-myrtle.png',
          'title': ''
        },
        {
          'src': '006-Tonks.png',
          'title': ''
        }
      ],
      options: {
        closeText: 'Close'
      }
    }
  },
  props: ['galleryName', 'group'],
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