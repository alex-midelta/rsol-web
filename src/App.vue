<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import NavbarVue from './components/Navbar.vue';
import Footer from './components/Footer.vue';


</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <NavbarVue></NavbarVue>

  <!-- Esto nomás está aquí para hacer espacio -->
  <section class="hero">
    <div class="hero-body">
    </div>
  </section>

  <!-- Aquí se ponen las vistas -->
  <RouterView />

  <!-- Footer -->
  <Footer></Footer>

</template>

<style>

</style>
