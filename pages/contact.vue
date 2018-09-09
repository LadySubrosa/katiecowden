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

      <div class="katieLocaitons">
      <h2>Where to Find Katie</h2>

      <div class="category">
      <h3>Online</h3>
        <p>Instagram: <a href="https://www.instagram.com/katiecowden/" target="_blank">@katiecowden</a><br/>
        <p>Jewelry on <a href="https://www.etsy.com/shop/KillerQueenJewelry" target="_blank">Etsy.</a></p>
      </div>
      <div class="category">
        <h3>Retail</h3>

      <h4>Austin, TX</h4>
        <ul>
          <li>Pink and Silver Fashion</li>
          <li>Revival Vintage</li>
          <li>Art for the People Gallery</li>
          <li>Secret Oktober</li>
          <li>Triple Z Threadz</li>
          <li>Slavonk &amp; Hortus</li>
          <li>Tillery Plant Co</li>
          <li>Recspec Gallery</li>
          <li>The Mall</li>
          <li>Arcane Sanctum</li>
          <li>Mexic-Arte Museum</li>
          <li>Museum of the Weird</li>
          <li>The Austin Shaker</li>
          <li>Stardust Vintage</li>
          <li>The Glass Coffin</li>
          <li>Fine Southern Gentlemen</li>
          <li>Austin Book Arts Center</li>
        </ul>

      <h4>Texas</h4>
        <ul>
          <li>Bird and Pear (San Antonio)</li>
          <li>Dallas Pinup (Dallas)</li>
          <li>Space Montrose (Houston)</li>
          <li>Frame Gallery (Bryan)</li>
          <li>Politix of Pwerple (New Braunfels)</li>
          <li>Fine Southern Gentlemen (San Marcos)</li>
        </ul>

      <h4>Elsewhere</h4>
      <ul>
          <li>Starling Magickal Occult Shop (New Orleans)</li>
          <li>Crose Nest Collective (Lowell, Massachusets)</li>
          <li>Ballyhoo Curiosities (Seattle)</li>
          <li>Ventura's Little Shop Of Horrors (Ventura, California)</li>
      </ul>
</div>
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
