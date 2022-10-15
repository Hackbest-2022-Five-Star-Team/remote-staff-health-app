<template>
  <main>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#" class="text-primary">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="home" class="pad-nav">Home</b-nav-item>
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
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  background-image: url('@/assets/hospital-healthcare-workers-concept-young-doctor.png');
  background-size: cover;
  background-position: center center;
}

.navbar-brand {
  font-family: hanson;
  font-size: 25px;
}
.pad-nav {
  margin-right: 40px;
}
</style>
