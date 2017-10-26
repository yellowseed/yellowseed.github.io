<template>
<nav class="navbar navbar-toggleable-xs navbar-light bg-faded">
  <a class="navbar-brand" href="#"><img src="/images/logo.svg"></img></a>
  <button class="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">Home</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/impact">Impact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/farmer">Farmer Fund</a>
      </li>
    </ul>
  </div>
</nav>

</template>

<script>
export default {
  name: 'navigation',
  props: [
    'items',
    'brand'
  ]
}
</script>
