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
  methods: {
    triggerClick: function (e) {
      e.target.click()
    }
  },
  props: ['galleryContent']
}
</script>

<template>

  <div :id="id" class="gallery">
    <h2>{{ galleryName }}</h2>
    <p>{{ galleryDescription }}</p>
    <div class="gallery-images">
      <template v-for="image in images">
      <template v-if="image.url">
        <a

          tabindex="0"
          :href="image.url"
          title=""
          target="_blank"
          class="thumbnail"
          :style="{ backgroundImage: 'url(' + require(`~/static/gallery/${path}/thumbnail/${image.file}`) + ')' }"
        >
          <span class="sr-only"></span>
        </a>
      </template>
      <template v-else>
        <img
          class="thumbnail"
          tabindex="0"
          :style="{ backgroundImage: 'url(' + require(`~/static/gallery/${path}/thumbnail/${image.file}`) + ')' }"
          alt=""
          v-img="{
            src: `/gallery/${path}/fullsize/${image.file}`,
            group: galleryName,
            title: galleryName
          }"
          v-on:keyup.enter="triggerClick"
          :src="`/gallery/${path}/thumbnail/${image.file}`"
        />
      </template>
      </template>
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
  justify-content: space-between;
  margin: auto;
  max-width: 960px;
  .thumbnail,
  a.thumbnail {
    box-sizing: border-box;
    width: percentage(1/4)-0.5;
    height: 0;
    margin: 0.25%;
    padding-top: percentage(1/4)-0.5;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    align-content: center;
    display: inline-block;
    position: relative;
    cursor: pointer;
    transition: filter 0.25s ease-in;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    &:hover,
    &:focus {
      -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
      filter: grayscale(0%);
    }
    @media screen and (max-width: 768px) {
      //display: block;
      margin-bottom: 1em;
      // width: 100%;
      // padding-top: 100%;
      width: percentage(1/2)-0.5;
      height: 0;
      margin: 0.25%;
      padding-top: percentage(1/2)-0.5;
      height: 0;
      filter: none;
    }
  }
}

.sr-only {
  position: absolute;
  height: 1px;
  width: 1px;
  clip: rect(1px 1px 1px 1px); // IE 6 and 7
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  overflow: hidden !important;
}
</style>
