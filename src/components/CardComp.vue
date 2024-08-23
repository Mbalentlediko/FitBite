<template lang="">
<template>
    <div class="p-cards">
    <slot name="product-cards">

            <div class="card"  v-for="product in products()" :key="product.prodID" style="width: 18rem;">
                <img :src="product.prodUrl" class="card-img-top" >
                <div class="card-body">
                    <center>
                    <h5 class="card-title">{{product.prodName}}</h5>
                    <p class="card-text">R{{product.amount}}</p>
                    <a href="#" class="btn btn-primary">View</a>
                    <a href="#" class="btn btn-primary">Buy</a>
                    </center>
                
                </div>
            </div>
            <!-- <section v-for="product in products() " :key="product.prodID">
                <br>
                {{ product.prodID }}
                {{ product.prodName }}
                {{ product.quantity }}
                R{{ product.amount }}
                {{ product.category }}
                <br><br>
            </section>  -->
        
    </slot>
</div>
</template>
</template>
<script>
export default {
    methods:{
        getProducts(){
            this.$store.dispatch('getProducts')
        },
        products(){
            return this.$store.state.products
        }
    },
    mounted() {
        this.getProducts()
    },
}
</script>
<style lang="">
    
</style>