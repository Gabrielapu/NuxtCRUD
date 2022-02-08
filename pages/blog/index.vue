<template>
  <div class="container mt-5">
    <div 
      class="card my-2" 
      v-for="(articulo, index) in articulos" :key="index"
    >
      <div class="card-body">
        <nuxt-link :to="`blog/${articulo.id}`">
          <h1>{{articulo.title}}</h1>
        </nuxt-link>
        <p>{{articulo.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      articulos: []
    }
  },
  async created() {
    try {
      const res = await axios
        .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      this.articulos = res.data
    } catch (error) {
      console.log(error);
      
    }
  },
}
</script>

<style>

</style>