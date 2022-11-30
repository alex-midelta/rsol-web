<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import NavbarVue from './components/Navbar.vue';
import CarouselVue from './components/Carousel.vue';

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

  <!-- Barra de navegación -->
  
  <NavbarVue></NavbarVue>
  
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
        <CarouselVue></CarouselVue>
        <!-- <p class="title">
          Titulo
        </p>
        <p class="subtitle">
          Hero subtitle
        </p> -->
      </div>
    </div>
  </section>

  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          Nuestros productos
        </p>
        <p class="subtitle">
          Primary subtitle
        </p>
      </div>
    </div>
  </section>
  <!-- Todavía no sé que hace esto pero lo dejaré aquí -->
  <RouterView />
</template>

<style>

</style>
