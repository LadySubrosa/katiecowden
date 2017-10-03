<template>
<div class="gallery">

hello gallery

{{ galleryName }}

<div v-for="image in galleryImages"> 
 <a :href="image.url"><img :src="image.thumb" width="300px" height="300px" /></a>
<h3>{{ image.title }}</h3>
<p>{{ image.description }}</p>
</div>

</div>
</template>

<script>
// contentful.js v4.x.x
const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})

export default {
  data () {
    return {
      galleryId: '3Kz6qHaXBmMKosI4Yk6kyY',
      galleryName: '',
      galleryImages: []
    }
  },
  methods: {
    getName: function () {
      return client.getEntry(this.galleryId)
        .then((entry) => {
          this.galleryName = entry.fields.galleryTitleType
        })
    },
    getImages: function () {
      return client.getEntry(this.galleryId)
        .then((entry) => {
          entry.fields.images.forEach((image) => {
            client.getEntry(image.sys.id).then((entry) => {
              let image = {}
              client.getAsset(entry.fields.thumbnail.sys.id)
                .then((asset) => {
                  image.thumb = asset.fields.file.url
                })
                .catch(console.error)
              client.getAsset(entry.fields.fullSizeImage.sys.id)
                .then((asset) => {
                  image.url = asset.fields.file.url
                })
                .catch(console.error)
              image.title = entry.fields.imageName
              image.description = entry.fields.imageDescription
              this.galleryImages.push(image)
            })
          })
        })
    }
  },
  mounted () {
    this.getName()
    this.getImages()
  }
}
</script>