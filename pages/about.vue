<template>
  <section id="about" class="container">

        <div class="bio">
          <div class="bio_content">
             <h1 class="title">About Katie Cowden</h1>
              <p>Katie Cowden was raised in Bryan, Texas by an art teacher and a mad scientist, given mixed media supplies and books for every birthday, and brought up to take traditional materials and techniques from around the world to bend into something entirely new. </p>

              <p>After ten years of teaching preschool, she took one laser cutting class and was ready to make her artistic bent into an artistic business. The end result was the eclectic, electric, and ultimately inimitable Killer Queen Designs.</p>

              <p>Katie now wields light-based laser blades, barely-there flashes of silver needles, and teeny-tiny paint brushes with equal proficiency to make wearable and museum display worthy artwork in her South Austin studio. And as her repertoire of techniques and materials expands, so too does the Killer Queen empire. </p>
        </div>
          <div class="bio_photo">
            <img src="~/static/bio/katie_paints.jpg" alt="Photo of Katie Cowden outside of her first studio." />
               <p class="caption">Katie outside of her first studio. Photos by <a href="https://www.dianascarrunz.com" target="_blank">Diana Ascarrunz Photography</a></p>

          </div>

      </div>
 <div class="findKatie">
        <div class="photo">
                  <img class="desktopOnly" src="~/static/bio/paintingjewelry.jpg" alt="Photo of Katie Cowden." />

                  <img src="~/static/bio/artsupplies.jpg" alt="Photo of Katie Cowden's art supplies" />

                     <img class="desktopOnly" src="~/static/bio/katie.jpg" alt="Photo of Katie Cowden" />

      </div>

      <div class="katieLocaitons">
        <Locations />

      <div class="category">
          <h3>Custom Inquiries</h3>
          <p>Katie is also available for custom work any time.<br/><router-link to="contact">Contact to set up an appointment in her South Austin studio.</router-link> </p>
      </div>
    </div>
</div>
  </section>
</template>

<script>
import locations from '~/components/locations.vue'
export default {
  head: {
    title: 'About Katie Cowden'
  },
  components: {
    Locations: locations
  }
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
        margin-bottom: 1em;
      }
      @media screen and (max-width:768px) {
        display: block;
        margin: auto;
        width: 90%;
      }
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
       .katieLocations{
        width: 60%;
        margin-top: 1em;
        @media screen and (max-width:768px) {
          display: block;
          width: 100%;
          margin: 2em auto;
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

      h3 {
        font-size: 1.25em !important;
        font-weight:600;
      }

      // ul {
      //   margin-bottom: 1em;
      // }

      .category {
              margin-bottom: 2em;
              h4 {
                font-size: .9em;
                font-weight: 600;
                text-transform: uppercase;
                color: #757575;
              }
              ul {
                margin-bottom: 1em;
                display: block;
                padding-bottom: 1em;
                border-bottom: 2px solid #e8e8e8;
              }
          }
      .photo {
        margin-right: 2em;
        width: 50%;
        img {
          width: 100%;
          height: auto;
        }
        @media screen and (max-width:768px) {
          display: block;
          margin: auto auto 1em;
          width: 100%;
          img.desktopOnly {
            display: none;
          }
        }
      }
    }
  }
</style>
