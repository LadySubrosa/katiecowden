<script>

import locations from '~/components/locations.vue'
export default {
  components: {
    Locations: locations
  }
}
</script>

<template>
  <section class="container">
    <div class="contact-content">
      <div class="contact-form">
        <h1 class="title">
          Contact</h1>

          <p>Looking for something in particular? Contact Katie for information on custom laser cutting work, portrait photography, or other creative endeavors.</p>

          <form name="contact" method="post" action="https://formspree.io/kt.cowden@gmail.com">
            <input type="hidden" name="_cc" value="lnd337@gmail.com" />
            <input type="hidden" name="_format" value="plain" />
            <input type="text" name="_gotcha" style="display:none" />
            <div class="input-group">
              <label>Your Name</label>
              <input type="text" name="name">
            </div>
            <div class="input-group">
              <label>Your Email Address</label>
              <input type="email" name="_replyto">
            </div>
            <div class="input-group">
              <label>Subject</label>

              <div class="radio_group"><input type="radio" name="_subject" value="Custom Laser Cut via Katiemakesart.com" id="subject1"><label for="subject1">Custom Laser Work</label></div>
              <div class="radio_group">
                <input type="radio" name="_subject" value="Photography via Katiemakesart.com" id="subject2"><label for="subject2">Portrait photography</label></div>
                <div class="radio_group">
                  <input type="radio" name="_subject" value="Gallery via Katiemakesart.com"id="subject3"><label for="subject3">Gallery Display</label></div>
                  <div class="radio_group">
                    <input type="radio" name="_subject" value="General Contact via Katiemakesart.com"id="subject4"><label for="subject4">Other</label></div>
                  </select>
                </div>
                <div class="input-group">
                  <label>Message</label>
                  <textarea name="message"></textarea>
                </div>
                <div class="input-group">
                  <button type="submit">Contact Katie</button>
                </div>
              </form>
              <img src="~/static/bio/paintingjewelry.jpg" alt="Photo of Katie Cowden's art supplies" />
            </div>
            <div class="photo">
              <img src="~/static/bio/contact.jpg" alt="Photo of Katie Cowden's painting supplies" />

              <div class="findKatie">
                <Locations />
                <div class="category">
                <p>Katie's line is available for wholesale or consignment. Please contact her for more information.</p>
                </div>
              </div>
            </div>
            </div>
          </div>


        </section>
      </template>

      <style lang="scss">
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

      .contact-content {
        display: flex;
        @media screen and (max-width: 768px){
          display: block;
        }
        .contact-form {
          width: 45%;
          margin-right: 5%;
          @media screen and (max-width: 768px){
            width: 100%;
            margin: 0 auto;
          }
          img {
            width: 100%;
            height: auto;
          }
          h1 {
            text-align: left;
            font-size: 3em;
            margin-bottom: .5em;
          }
          p {
            font-size: 1.25em;
            line-height: 1.5em;
            margin-bottom: 1em;
          }
        }
        .photo {
          box-sizing: border-box;
          padding-left: 2em;
          margin: 0;
          width: 50%;
          @media screen and (max-width:768px) {
            width: 100%;
            margin: auto;
            padding: 1em 0;
          }
          img {
            width: 100%;
          }
        }
      }

      </style>
