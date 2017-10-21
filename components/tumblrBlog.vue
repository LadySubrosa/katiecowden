<template>
<div class="tumblrBlog">

</div>
</template>
<script>
// import tumblr from 'tumblr.js'

// const client = tumblr.createClient({
//   consumer_key: 'BHEoDQhmR3LgajGpwhXpXGLWGWR9Dd0UO9IApch1gEK2LWRLa4',
//   consumer_secret: '8nwTGmgdtl4OM9QQX6PkdIbeUrrtEkPbPCWOd1PTgkzFlLvP1o'
// })

export default {
  data () {
    return {
    }
  },
  props: [
    'blogName'
  ],
  mounted () {
    // client.blogPosts(this.blogName, response => {
    //   console.log(response)
    // })
  }
}
</script>