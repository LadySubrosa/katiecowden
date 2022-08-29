<template>
  <section id="gallery" class="container">
    <div>
      <h1 class="title h2">📷 52 Portraits 2019</h1>

      <p>
        I'm taking 52 portraits in 2019, to get back into doing photography for
        fun, and to document the people in my life. It's a challenge to myself
        to work in a variety of styles, with people of different ages, races,
        and genders. At the end of the year, I hope to have improved my portrait
        skills, and have acquired new work for my portfolio.
      </p>
      <gallery :galleryContent="photos" />
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
  data() {
    return {
      photos: galleryContent.portrait || {}
    }
  }
}
</script>

<style lang="css">
h1.title {
  font-family: 'Georgia', serif;
  margin-bottom: 1em;
}
#gallery {
  padding-top: 1em;
}

#gallery h2 {
  line-height: 1em;
  margin-bottom: 0.5em;
}
#gallery p {
  margin-bottom: 1em;
  font-size: 1.25em;
  line-height: 1.5em;
}
</style>
