<script>
import Instafeed from 'instafeed.js'

export default {
  data() {
    return {
      // instagramFeed: [1, 2, 3, 4],
      // clientID: 'e743c360a248473f8a0b188c88816792',
    }
  }
}
var feed = new Instafeed({
  get: 'user',
  userId: '31064017',
  sortBy: 'most-recent',
  resolution: 'low_resolution',
  limit: 8,
  clientId: 'e743c360a248473f8a0b188c88816792',
  accessToken: '31064017.e743c36.afe76f91cd00496bab5edbc4c7df3242',
  template:
    '<div class="crop"><a class="instagramImage" href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>'
})
feed.run()
</script>

<template>
  <div class="instagramFeed">
    <h3>
      <a href="https://www.instagram.com/katiecowden/" target="_blank"
        >@KatieCowden</a
      >
    </h3>
    <div id="instafeed"></div>
    <h3 class="bottomOfFeed">
      <a href="https://www.instagram.com/katiecowden/" target="_blank"
        >more on instagram &rarr;</a
      >
    </h3>
  </div>
</template>

<style lang="css">
.instagramFeed {
  margin: 2rem auto;
  display: block;
}

.instagramFeed h3 {
  line-height: 2rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.instagramFeed h3.bottomOfFeed {
  text-align: right;
}
#instafeed {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.crop {
  padding-top: 24%;
  overflow: hidden;
  height: 0;
  width: 24%;
  margin-bottom: 1em;
  position: relative;
  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  .crop {
    width: 48%;
    height: 0;
    padding-top: 48%;
  }
}
.crop img {
  height: auto;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  transition: filter 0.3s ease-in;
}

.crop img:hover {
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
</style>
