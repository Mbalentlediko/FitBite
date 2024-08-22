<template>
    <div>
      <nav id="navbar">
        <img id="logo" src="https://itz-marcus.github.io/ecom-img-hosting/FitBite_logo.png" alt="">
        <div id="nav1">
          
          <router-link to="/">Home</router-link> 
          <router-link to="/about">About</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/contactUs">Contact Us</router-link>
          <router-link to="/Admin">Admin</router-link>
        </div>
        
      </nav> 
    </div>
  </template>
  
  <script>
  export default {
   
  }
  </script>
  
  <style scoped>
nav {
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 0.5vw;
  width: 100vw;
}
#nav1, #nav2{
  align-content: center;
}
#logo{
  object-fit: contain;
  width: 11vw;
  position: absolute;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: 0.2s;
}

nav a.router-link-exact-active {
  color: #FFB84E;
  text-decoration: none;
}

nav a{
  padding: 20px;
  color: #42b983;
  font-size: 1.5vw;
  text-decoration: none;
}
  </style>