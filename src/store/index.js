import { createStore } from 'vuex'
import axios from "axios"
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const apiUrl = 'https://fitbite-1edw.onrender.com/' 

export default createStore({
  state: {
    products:null,
    users:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload;
    },
    setProducts(state, payload){
      state.products = payload;
    }
  },
  actions: {
    async getProducts({commit}){
      try{
        let {data} = await axios.get(`${apiUrl}products`)
        console.log(data);
        
        commit ('setProducts',data.results)
      }
      catch(error){
        console.log(error)
      }
  }
},
  modules: {
  }
})
