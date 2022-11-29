<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Carousel from './components/Carousel.vue'

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
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Inicio
        </a>

        <a class="navbar-item">
          Sobre nosotros
        </a>

        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div> -->
      </div>

      <div class="navbar-end">
        <!-- <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </nav>

  <Carousel></Carousel>

  <!-- <script src="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/js/bulma-carousel.min.js"></script>
		<script>
			bulmaCarousel.attach('#carousel-demo', {
				slidesToScroll: 1,
				slidesToShow: 4
			});
		</script> -->


  <!-- Slideshow / Carousel -->
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          Titulo
        </p>
        <p class="subtitle">
          Hero subtitle
        </p>
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
