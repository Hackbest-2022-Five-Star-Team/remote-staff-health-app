<template>
  <main>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="home" class="pad-nav">Link</b-nav-item>
          <b-nav-item href="#" class="pad-nav">Medical Service</b-nav-item>
          <b-nav-item href="#" class="pad-nav">Login</b-nav-item>
          <b-nav-item href="#" class="btn btn-primary pad-nav"
            >Sign Up</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </main>
  <router-view />
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Title</h5>
      <p class="card-text">Content</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.pad-nav {
  margin-right: 40px;
}
</style>
