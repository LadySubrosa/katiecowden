<template>
<div class="gallery">
  <h2>{{ galleryName }}</h2>
  <p>{{ galleryDescription }}</p>
  <div class="gallery-images" >
    <div class="thumbnail" v-for="image in images" :style="{ 'background-image': 'url(' + path+'/thumbnail/'+image + ')' }">
    <img v-img="{ src: path+'/fullsize/'+image, group: galleryName, title: galleryName }" :src="path+'/thumbnail/'+image" />
  </div>
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
.gallery-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    max-width: 960px;
    width: 80%;
  .thumbnail {
    background-position:center center;
    background-repeat:no-repeat;
    background-size:cover; 
        align-content: center;
    display: flex;
    font-size: 3em;
    flex-basis: 1;
    justify-content: center;
    // maintain aspect ratio
    margin-bottom: .5em;
    width: 10vw;
    height: 10vw;
    img {
      transition: filter .25s ease-in;
      -webkit-filter: grayscale(60%); /* Safari 6.0 - 9.0 */
      filter: grayscale(60%);
       margin: 0;
       opacity: 0;
      &:hover {
      -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
      filter: grayscale(0%);
      }
    }

  }
}
</style>