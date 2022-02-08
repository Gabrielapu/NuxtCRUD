<template>
  <div class="mb-5">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#">CRUD</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Inicio</b-nav-item>
          <b-nav-item to="/blog">Blog</b-nav-item>
          <b-nav-item to="/vuex">Vuex</b-nav-item>
          <b-nav-item to="/contacto">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>