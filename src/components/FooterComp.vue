<template>
    <div>
      <nav class="sticky-bottom" id="footer">
        <div>
          <footer>
            
            <div id="foot">
                <i class="lab la-instagram"></i><i class="lab la-youtube"></i><i class="lab la-facebook-square"></i>
                <div class="cr">Copyright © {{ date()}} . FitBite </div> </div>
          </footer>
        </div>
      </nav> 
    </div>
  </template>
  
  <script>
  export default {

  methods:{
    date() {
    const d = new Date();
    return d.getFullYear();
    }
  }
}
  </script>
  <style>
  @media screen and (max-width:750px){
.cr{
  font-size: 1vw;
}
}
    /* -------- footer -------- */  
#foot{
  position: relative;
  bottom: 0px;
    width: auto;
    height: 8vh;
    text-align: center;
    font-size: 1.7vh;
    align-content: center;
    background: #B04DFF;
    color: white;
    
}
i{
  font-size: 3vh;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-bottom: 0.2vw;
}

  </style>