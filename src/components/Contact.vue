<template>
<div id="contact">

  <div class="contact-banner banner">
    <h1>Contact Us</h1>
    <div class="col-12 col-md-8 offset-md-2">
      <p class='center'>We'd love to hear from you!</p>
    </div>
  </div>

  <div class='container'>
    <div class='row'>
      <div class="col-md-8 mt-5 contact-form">
        <form action="mailto:hello@yellow-seed.org?subject=contact&" enctype="text/plain">
          <h2>Send a Message</h2>
          <p class="mt-3">We look forward to hearing any questions, comments or ideas you have of working together.</p>
          <label>Name<input type="text" name="name" id="name" required="required"> </label>
          <label>Email<input type="email" name="email" id="email" required="required"> </label>
          <label>Subject<input type="text" name="subject" id="subject" required="required"> </label>
          <label>Body<textarea name="body" id="body" required="required"></textarea> </label>
          <input type="submit" name="commit" value="send message" class="btn-default mt-3"> </input>
        </form>
      </div>
      <div class="col-md-4 mt-5 contact-us-sidebar">
        <h4>CONTACT DETAILS</h4>
        <ul class="fa-ul">
          <li><i class="fa-li fa fa-phone"></i> 818-225-9150</li>
          <li><i class="fa-li fa fa-envelope"></i> <a href="mailto:hello@yellow-seed.org">hello [at] yellow-seed.org</a></li>
          <li><i class="fa-li fa fa-twitter"></i> <a href="https://twitter.com/cocreativecacao">@cocreativecacao</a></li>
          <li><i class="fa-li fa fa-facebook"></i> <a href="https://www.facebook.com/YellowSeedOrg">/YellowSeedOrg</a></li>
        </ul>
      </div>
    </div>
  </div>

</div>
</template>