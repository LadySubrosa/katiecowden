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
      galleryName: this.galleryContent.galleryTitle,
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
.gallery {
  margin-bottom: 2em;
}

h2 {
  font-size: 2em;
  margin-bottom: 1em;
}

p {
  margin-bottom: 1em;
}

.gallery-images {
    // display: flex;
    // flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    max-width: 960px;
  .thumbnail {
    box-sizing: border-box;
    width: 32%;
    height: 0;
    padding-top: 32%;
    margin: .25%;
    background-position:center center;
    background-repeat:no-repeat;
    background-size:cover; 
        align-content: center;
    display: inline-block;
    position: relative;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      display: block;
      margin-bottom: 1em;
      width: 100%;
      padding-top: 100%;
      height: 0;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
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