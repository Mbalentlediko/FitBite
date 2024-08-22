<template>
  <div class='sticky-top'>
    <nav id="navbar" >
      <div id="nav1">
        <router-link id="nav-part" to="/">Home</router-link> 
        <router-link id="nav-part" to="/about">About</router-link>
        <router-link id="nav-part" to="/products">Products</router-link>
      </div>
      <div id="nav2">
        <router-link id="nav-part" to="/contactUs">Contact Us</router-link>
        <router-link id="nav-part" to="/Admin">Admin</router-link>
      </div>
    </nav> 
  </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
</style>
