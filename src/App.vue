<template>
  <main class="px-4">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">Remote Work</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="home" class="pad-nav">Home</b-nav-item>
          <b-nav-item href="#" class="pad-nav">Medical Service</b-nav-item>
          <b-nav-item href="#" class="pad-nav">Login</b-nav-item>
          <b-nav-item href="#" class="btn btn-sm bg-primary1 pad-nav"
            >Sign Up</b-nav-item
          >
          <b-nav-item href="#" class="pad-nav">
            <b-icon-person-circle
              variant="dark"
              style="width: 30px; height: 30px"
            ></b-icon-person-circle>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </main>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';
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
  background-position: top left;
}

nav.navbar {
  padding-left: 0;
  padding-right: 0;
  .navbar-brand {
    font-family: hanson;
    font-style: normal;
    font-size: 32px;
    font-weight: 700;
    line-height: 33px;
    color: $primaryColor !important;
  }
  .pad-nav {
    margin-right: 40px;
    a {
      color: #000 !important;
    }
    &:last-of-type {
      a {
        color: #fff !important;
      }
    }
  }
}

.bg-primary1 {
  background-color: $primaryColor !important;
}
.text-secondary1 {
  color: $secondaryColor !important;
}
.rounded-xl {
  border-radius: 13px !important;
}
</style>
