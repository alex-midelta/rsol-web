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
          <div class="container has-text-centered">
            <img src="@/assets/logo_rsol_navbar.png" width="330px">
          </div>
          <br> 
          <p class="subtitle has-text-justified">
            En <strong>Radiosoluciones en Comunicación S.A. de C.V.</strong>, nos dedicamos, desde hace más de 15 años, a la implementación de sistemas de radiocomunicación con la mejor tecnología y los mejores equipos que existen en el mercado de Culiacán, Sinaloa.
          </p>
          <p class="subtitle has-text-justified">
            Además, implementamos sistemas solares interconectados a la <strong>CFE</strong>. Ofrecemos venta, asesoría, servicios de instalación y mantenimiento de sistemas de radiocomunicación digital y convencional, lo que nos hace una empresa que ofrece atención completa.
          </p>
          <p class="subtitle has-text-justified">
            Distribuimos marcas élite de <strong>Kenwood</strong> y realizamos trámites de permisos ante el <strong>IFETEL</strong>.
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
          <iframe width="100%" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgxWaWkPXvIYRXKBIGi7pXOw&key=AIzaSyAVdHkwZCWgJFMwGPkzIWA5XB1AR_J3ehM"></iframe> 
        </div>
      </div>
    </section>
  </main>
</template>