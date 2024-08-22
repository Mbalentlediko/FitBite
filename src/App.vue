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
@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap');
body{
  background-color: white;
}

#app {
  font-family: "Bungee Inline", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #359D58;
}




</style>
