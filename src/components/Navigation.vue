<template>

<b-navbar navbar toggleable="md" type="light" variant="light" id="nav">

  <b-nav-toggle target="nav_collapse"></b-nav-toggle>

  <b-navbar-brand class='ysLogo' href="#/">
    <img class='brand' alt='brand.title' src='../assets/images/logo.svg'/>
  </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-nav is-nav-bar class="ml-auto">

      <b-nav-item right href="#/contact">Contact Us</b-nav-item>

    </b-nav>

  </b-collapse>
</b-navbar>

</template>
