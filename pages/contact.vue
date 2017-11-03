<template>
  <section class="container">
      
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
    <select name="_subject">
      <option value="Custom Laser Cut via Katiemakesart.com">I want to order a custom lasercut piece.</option>
      <option value="Photography via Katiemakesart.com">I want to hire Katie for portrait photography.</option>
      <option value="Gallery via Katiemakesart.com">I want to display Katie's work in my space.</option>
      <option value="General Contact via Katiemakesart.com">I want to contact Katie about something else</option>
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
 <img src="~/static/bio/artsupplies.jpg" alt="Photo of Katie Cowden's painting supplies" />
</div>

  </section>
</template>

<style lang="scss">


  .container {
    display: flex;
    .contact-form {
      width: 50%;
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
    }
  }
  
</style>

<script>


</script>