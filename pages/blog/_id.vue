<template>
  <div class="container">
    <div class="card my-2">
      <div class="card-body">
        <h1>{{articulo.title}}</h1>
        <p class="small">{{articulo.autor}}</p>
        <p>{{articulo.body}}</p>
        <nuxt-link to="/blog" class="btn btn-primary">Atrás</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return { }
  },
  async created() {},
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    try {
      const res = await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      const articulo = res.data

      const resAutor = await axios
        .get(`https://jsonplaceholder.typicode.com/users/${articulo.userId}`)
      articulo.autor = resAutor.data.name

      return { articulo };
    } catch (error) {
      console.log(error);
    }
  },
}
</script>

<style>

</style>