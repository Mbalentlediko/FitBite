<template>
  <nav>
    <navbar-comp>
    </navbar-comp>
  </nav>
  <footer-comp>
  </footer-comp>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue'
export default {
components: {
  NavbarComp,
  FooterComp
}
}
</script>
<style>
body{
  background-color: #42b983;
}
#logo{
  object-fit: contain;
  width: 14vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
