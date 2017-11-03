<template>
  <section class="container">
  
        <div class="bio">
          <div class="bio_content">
             <h1 class="title">About Katie Cowden</h1>
              <p>Katie Cowden was raised in Bryan, Texas by an art teacher and a mad scientist, given mixed media supplies and books for every birthday, and brought up to take traditional materials and techniques from around the world to bend into something entirely new. </p>

              <p>After ten years of teaching preschool, she took one laser cutting class and was ready to make her artistic bent into an artistic business. The end result was the eclectic, electric, and ultimately inimitable Killer Queen Designs.</p>

              <p>Katie now wields light-based laser blades, barely-there flashes of silver needles, and teeny-tiny paint brushes with equal proficiency to make wearable and museum display worthy artwork in her East Austin studio. And as her repertoire of techniques and materials expands, so too does the Killer Queen empire. </p>
        </div>
          <div class="bio_photo">
            <img src="~/static/bio/katie_paints.jpg" alt="Photo of Katie Cowden outside of her studio in East Austin." />
               <p class="caption">Katie outside of her studio in East Austin. Photos by <a href="https://www.dianascarrunz.com" target="_blank">Diana Ascarrunz Photography</a></p>

          </div>
      
      </div>

      <div class="photos">
                  <img src="~/static/bio/katie.jpg" alt="Photo of Katie Cowden." />
   <p class="caption"></p>
            


      </div>

  </section>
</template>

<script>

export default {
  head: {
    title: 'About Katie Cowden'
  }
}
</script>


<style lang="scss">
section {
//  width: 80%;
  margin: auto;
}
.photos {
  display: block;
  margin:2em auto;
  width: 75%;
  img {
    width: 100%;
    height: auto;
  }
}
  h1 {
    text-align: left;
    font-size: 3em;
    margin-bottom: .5em;
  }
  .bio {
    display: flex;
    @media screen and (max-width:768px) {
      display: block;
    }
    .bio_photo {
      margin-left: 2em;
          @media screen and (max-width:768px) {
      display: block;
      margin: auto;
      width: 90%;
    }
      img {
        width: 100%;
        height: auto;
      }
    }
    .bio_content {
      padding: 2em 0;
      width: 60%;
          @media screen and (max-width:768px) {
            display: block;
            width: 90%;
            margin: auto;
            padding: 0;
           }
      p {
        font-size: 1.25em;
        line-height: 1.5em;
        margin-bottom: 1em;
      }
    }
  }
</style>
