<template>
  <section id="about" class="container">
  
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
 <div class="findKatie">
        <div class="photo">
                  <img src="~/static/bio/paintingjewelry.jpg" alt="Photo of Katie Cowden." />
   <p class="caption"></p>
      </div>

      <div class="katieLocaitons">
      <h2>Where to Find Katie</h2>

      <div class="category">
      <h3>Online</h3>
        <p>Instagram: <a href="https://www.instagram.com/katiecowden/" target="_blank">@katiecowden</a><br/>
        <p>Jewelry on <a href="https://www.etsy.com/shop/KillerQueenJewelry" target="_blank">Etsy.</a></p>
      </div>
      <div class="category">

      <h3>Austin, TX Retail</h3>
      <ul>
        <li>Blue Velvet Vintage</li>
        <li>Secret Oktober</li>
        <li>Art For The People Gallery</li>
        <li>Nature’s Treasures</li>
        <li>Waterstone Salon</li>
        <li>Grn Glassworks</li>
      </ul>
</div>
      <div class="category">
          <h3>Custom Inquiries</h3>
          <p>Katie is also available for custom work any time.<br/><router-link to="contact">Contact to set up an appointment in her East Austin studio.</router-link> </p>
      </div>
    </div>
</div>
  </section>
</template>

<script>
import findKatie from '~/components/findKatie.vue'
export default {
  head: {
    title: 'About Katie Cowden'
  },
  components: [
    findKatie
  ]
}
</script>


<style lang="scss">
#about {
//  width: 80%;
  margin: auto;
  font-size: 1.25em;
  line-height: 1.5em;
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
    font-size: 2em;
    margin-bottom: .5em;
  }


  .bio, .findKatie {
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
  }
  .bio_content {
      width: 60%;
          @media screen and (max-width:768px) {
            display: block;
            width: 90%;
            margin: auto;
            padding: 0;
           }
      p {
        margin-bottom: 1em;
      }
      h2 {
        font-size: 1.5em !important;
        font-weight: 600;
      }

      h3 {
        font-size: 1.25em !important;
        font-weight:600;
      }
    }
    .category {
      margin-bottom: 2em;
    }
    .photo {
      margin-right: 2em;
      width: 40%;
      img {
        width: 100%;
        height: auto;
      }
      @media screen and (max-width:768px) {
        display: block;
        margin: auto;
        width: 90%;
      }
    }
    .katieLocations{
      width: 60%;
          @media screen and (max-width:768px) {
            display: block;
            width: 90%;
            margin: auto;
            padding: 0;
           }
      p {
        margin-bottom: 1em;
      }
      h2 {
        font-size: 1.5em !important;
        font-weight: 600;
      }

      h3 {
        font-size: 1.25em !important;
        font-weight:600;
      }
    }
    .category {
      margin-bottom: 2em;
    }
    .photo {
      margin-right: 2em;
      width: 40%;
      img {
        width: 100%;
        height: auto;
      }
      @media screen and (max-width:768px) {
        display: block;
        margin: auto;
        width: 90%;
      }
  .findKatie {
    margin: 4em auto 0;
    width: 90%;
    @media screen and (max-width: 768px) {
      margin-top: 0;
    }
    h3 {
      font-weight: 600;
    }
  }
}
}
</style>
