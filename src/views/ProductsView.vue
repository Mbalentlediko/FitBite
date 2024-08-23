<template>
    <div class="product">
      <div id="background">
      <h1>This is a products page</h1>
      <div>
        <card-comp/>
        </div>
      </div>
    </div>
  </template>
    <script>
    import CardComp from '@/components/CardComp.vue'
    export default{
  components: {
    CardComp
  },
    
  }
  </script>