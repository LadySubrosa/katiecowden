<script>
import Instafeed from 'instafeed.js'

export default {
  data () {
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
  template: '<div class="crop"><a class="instagramImage" href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>'
})
feed.run()
</script>

<template>
  <div class="instagramFeed">
    <h3><a href="https://www.instagram.com/katiecowden/" target="_blank">@KatieCowden</a></h3>
    <div id="instafeed">
    </div>
  </div>
</template>

<style lang="scss">
.instagramFeed {
  margin:auto;
  display: block;
  h3 {
    line-height: 2rem;
    font-size: 1.5rem;
  }
  #instafeed {
    display: flex;
    flex-wrap: wrap;
  }
}
.crop {
  padding: 2px;
  overflow: hidden;
  width: 25%;
  height: 200px;
  box-sizing: border-box;
  img {
    width: 100%;
    height: auto;
  }
}
</style>