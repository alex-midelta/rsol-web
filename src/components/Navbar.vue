<template>
    <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    <RouterLink to="/">
                        <h1 class="title is-4">Inicio</h1>
                    </RouterLink>
                </a>
                <a class="navbar-item">
                    <RouterLink to="/about">
                        <h1 class="title is-4">Sobre nostros</h1>
                    </RouterLink>
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