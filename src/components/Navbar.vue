<script lang="ts">

export default {
    data() {
        return {
            isHamburgerOpen: false,
        }
    },
    methods: {
        openHamburgerMenu() {
            this.isHamburgerOpen = !this.isHamburgerOpen;
        },
        closeHamburgerMenu() {
            this.isHamburgerOpen = false;
        }
    }
}
</script>

<template>
    <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">

        <div class="navbar-brand">
            <a class="navbar-item" href="https://alex-midelta.github.io/rsol-web/">
                <figure class="image">
                    <img src="@/assets/logo_rsol_navbar.png" >
                </figure>
                <!-- <h1 class="title is-t1">RSOL</h1> -->
            </a>

            <a role="button" class="navbar-burger" :class="{ 'is-active': isHamburgerOpen }" @click="openHamburgerMenu"
                aria-label="menu" aria-expanded="false" data-target="navMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navMenu" class="navbar-menu" :class="{ 'is-active': isHamburgerOpen }">
            <div class="navbar-start">
                <RouterLink to="/" class="navbar-item" @click="closeHamburgerMenu">
                    <strong>Inicio</strong>
                </RouterLink>
                <RouterLink to="/catalogo" class="navbar-item" @click="closeHamburgerMenu">
                    <strong>Nuestros productos</strong>
                </RouterLink>
                <RouterLink to="/chatbot" class="navbar-item" @click="closeHamburgerMenu">
                    <strong>Asistencia en linea</strong>
                </RouterLink>
                <RouterLink to="/about" class="navbar-item" @click="closeHamburgerMenu">
                    <strong>Sobre nosotros</strong>
                </RouterLink>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <!-- Este botón está "estático" para que no sea "clickeable" (y a la vez "acitvo", para que no se vea gris) -->
                        <a class="button is-light is-medium is-static is-active">
                            <span class="icon">
                                <font-awesome-icon icon="fa-solid fa-phone" />
                            </span>
                            <span>
                                <strong><a href="tel:+526677120726">667-712-0726</a></strong>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>