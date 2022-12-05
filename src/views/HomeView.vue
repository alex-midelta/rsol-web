<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import CarouselVue from '@/components/Carousel.vue';
import Tasks from '@/components/Tasks.vue';
</script>

<template>
  <main>
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container has-text-centered">
          <Tasks></Tasks>
          <br>
          <p class="title">
            Nuestros productos
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
            Catálogo
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
            Primary hero
          </p>
          <p class="subtitle">
            Primary subtitle
          </p>
        </div>
      </div>
    </section>
  </main>
</template>