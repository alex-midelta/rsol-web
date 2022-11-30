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
        }
    }
}
</script>

<template>
    <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">

        <div class="navbar-brand">
            <a class="navbar-item" href="https://alex-midelta.github.io/rsol-web/">
                <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
                <h1 class="title is-t1">RSOL</h1>
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
                <RouterLink to="/" class="navbar-item">
                    <strong>Inicio</strong>
                </RouterLink>
                <RouterLink to="/about" class="navbar-item">
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
                                <strong>6671892304</strong>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>