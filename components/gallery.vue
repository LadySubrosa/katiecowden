<script>
export default {
  data: function () {
    return {
      galleryName: this.galleryContent.galleryTitle,
      galleryDescription: this.galleryContent.galleryDescription,
      images: this.galleryContent.galleryImages,
      path: this.galleryContent.path,
      id: this.galleryContent.id
    }
  },
  props: ['galleryContent']
}
</script>

<template>
<div :id="id" class="gallery">
  <h2>{{ galleryName }}</h2>
  <p>{{ galleryDescription }}</p>
  <div class="gallery-images" >
  <div class="thumbnail" v-for="image in images" :style="`background-image :url(/gallery/${path}/thumbnail/${image.file});`">
    <div v-if="image.url" class="instagram-link">
    <a tabindex="0" :href="image.url" >
        <img :alt="galleryName" :src="`/gallery/${path}/thumbnail/${image.file}`" />
    </a>
  </div>
  <div class="gallery-link" v-else>
      <img tabindex="0" v-img="{ src: `/gallery/${path}/fullsize/${image.file}`, group: galleryName, title: galleryName }" :src="`/gallery/${path}/thumbnail/${image.file}`" />
  </div>
  </div>
  </div>

</div>
</template>

<style lang="scss">
.gallery {
  margin: 2em auto;
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
    width: percentage(1/4)-.5;
    height: 0;
    margin: .25%;
    padding-top: percentage(1/4)-.5;
    background-position:center center;
    background-repeat:no-repeat;
    background-size:cover;
    align-content: center;
    display: inline-block;
    position: relative;
    cursor: pointer;
    transition: filter .25s ease-in;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
      &:hover {
              -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
      filter: grayscale(0%);
      }
    @media screen and (max-width: 768px) {
      //display: block;
      margin-bottom: 1em;
      // width: 100%;
      // padding-top: 100%;
      width: percentage(1/2)-.5;
      height: 0;
      margin: .25%;
      padding-top: percentage(1/2)-.5;
      height: 0;
      filter: none;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
       margin: 0;
       opacity: 0;
    }

  }
}
</style>
