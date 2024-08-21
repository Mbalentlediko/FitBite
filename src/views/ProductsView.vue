<template>
    <div class="product">
      <h1>This is a products page</h1>
      <div>
            <hr>
            <section v-for="product in products() " :key="product.prodID">
                <br>
                {{ product.prodID }}
                {{ product.prodName }}
                {{ product.quantity }}
                R{{ product.amount }}
                {{ product.category }}
                <!-- <img :src= "product.prodUrl" alt=""> -->
                
                
                <br><br>
                <!-- <button @click="addToCart(fruit.id)" v-if="$cookies.get('token')">Purchase {{ fruit.fruit_name }}/s</button> -->
                <hr>
            </section>
        </div>
    </div>
  </template>
    <script>
    export default{
      methods:{
        getProducts(){
            this.$store.dispatch('getProducts')
        },
        products(){
            return this.$store.state.products
        }
        // ,
        // addToCart(id_fruit){
        //     this.$store.dispatch('addToCart',id_fruit)
        // }
    },
    mounted() {
        this.getProducts()
    },
  }
  </script>