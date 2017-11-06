<template>
  <section class="container">
      
      <div class="contact-content">
    <div class="contact-form">
      <h1 class="title">
        Contact</h1>
      
      <p>Looking for something in particular? Contact Katie for information on custom laser cutting work, portrait photography, or other creative endeavors.</p>

<form name="contact" method="post" action="https://formspree.io/lnd337@gmail.com">
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
</div>
           <div class="photo">     
 <img src="~/static/bio/contact.jpg" alt="Photo of Katie Cowden's painting supplies" />
 <div class="findKatie">

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
</div>
</div>

 
  </section>
</template>

<style lang="scss">


  .contact-content {
    display: flex;
    @media screen and (max-width: 768px){
      display: block;
    }
    .contact-form {
      width: 40%;
      @media screen and (max-width: 768px){
        width: 100%;
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
      width: 50%;
      img {
        width: 100%;
      }
    @media screen and (max-width: 768px){
      display: none;
    }
    }
  }
  
</style>

<script>


</script>