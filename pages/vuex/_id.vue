<template>
  <div class="container mb-5">
    <h2> Editar tarea </h2>
    <form @submit.prevent="editTask(task)">
      <input type="text" class="form-control mb-2" v-model="task.nombre">
      <b-button type="submit" class="btn btn-warning">Editar</b-button>
    </form>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase"
import { mapActions } from 'vuex'
export default {
  fetch({store, params}) {
    return db.collection('tasks').doc(params.id).get()
      .then(doc => {
        if(doc.exists) {
          let task = doc.data();
          task.id = doc.id;
          return store.commit('setSingleTask', task)
        }
      })
      .catch(error => console.log(error))
  },
  computed: {
    task: {
      get() {
        return {
          nombre: this.$store.state.task.nombre,
          id: this.$store.state.task.id
        }
      }
    }
  },
  methods: {
    ...mapActions(['editTask'])
  }
}
</script>
