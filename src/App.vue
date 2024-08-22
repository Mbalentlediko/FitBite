<template>
  <navbar-comp>
  </navbar-comp>
  <router-view/>
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
<style src="@/assets/css/style.css">
</style>
