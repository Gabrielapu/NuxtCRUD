<template>
  <div class="container">
    <h1>vuex</h1>
    <form @submit.prevent="addTask(task)">
      <input type="text" class="form-control mb-2" v-model="task">
      <b-button type="submit">Agregar</b-button>
    </form>
    <ul>
      <li v-for="task, index in tasks" :key="index">
        {{task.id}} - {{task.nombre}}
        <b-button class="btn-sm btn-warning" :to="`/vuex/${task.id}`">
          Editar
        </b-button>
        <b-button 
          class="btn-sm btn-danger"
          @click="deleteTask(task)"
        >
          Eliminar
        </b-button>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      task: ''
    }
  },
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    ...mapActions(['addTask', 'deleteTask'])
  }
}
</script>

<style>

</style>