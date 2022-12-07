<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import CarouselVue from '@/components/Carousel.vue';
</script>

<template>

  <main>
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Radiosoluciones en Comunicación S.A. de C.V.
          </p>
          <CarouselVue></CarouselVue>
        </div>
      </div>
    </section>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Ofrecemos tal y tal
          </p>
          <p class="subtitle">
            Primary subtitle
          </p>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Ubicación
          </p>
          <iframe width="1000" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgxWaWkPXvIYRXKBIGi7pXOw&key=AIzaSyAVdHkwZCWgJFMwGPkzIWA5XB1AR_J3ehM"></iframe> 
        </div>
      </div>
    </section>
  </main>
</template>