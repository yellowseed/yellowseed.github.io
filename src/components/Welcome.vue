<template>
<div id="homepage">

<div class="homepage-banner banner">
      <h1>Thank You</h1>

  <div class="col-xl-8 offset-xl-2">
    <p class='center'>Yellow Seed has closed our beta platform and we are evolving based on all we have learned. Sign up for our email list below to keep updated.</p>
    <div class="mt-4">
      <label class='home-email-label'><input  v-model='email' placeholder="email" type="email" name="email" id="home-email" required="required"></label>
        <button class="btn-default mt-3" v-on:click="subscribe">subscribe</button>
       </div>
  </div>
</div>


</div>
</template>
<script>
export default {
  name: 'welcome',
  data: function () {
    return {
      email:'' 
    }
  },
  methods: {
    subscribe:function () {
      document.getElementById('mce-FNAME').value=this.email.substring(0,this.email.indexOf('@'))
      document.getElementById('mce-LNAME').value=' ~ '
      document.getElementById('mce-EMAIL').value=this.email
      document.getElementById('mc-embedded-subscribe-form').submit()
    }
  }
};

</script>

