import { db } from '@/plugins/firebase'

export const state = () => ({
  tasks: '',
  task: ''
})

export const mutations = {
  setTasks(state, payload) {
    state.tasks = payload
  },
  setTask(state, payload) {
    state.tasks.push(payload)
  },
  deleteTask(state, payload) {
    state.tasks = state.tasks.filter(task => task.id !== payload.id)
  },
  updateTask(state, payload) {
    const index = state.tasks.findIndex(task => task.id === payload.id)
    state.tasks[index].nombre = payload.nombre
  },
  setSingleTask(state, payload) {
    state.task = payload
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    return db.collection('tasks').get()
      .then(query => {
        const tasks = []
        query.forEach(element => {
          let task = element.data()
          task.id = element.id
          tasks.push(task)
        })
        return commit('setTasks', tasks)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  async addTask({commit}, payload) {
    try {
      const doc = await db.collection('tasks').add({
        nombre: payload,
        fecha: new Date()
      })
      commit('setTask', { nombre: payload, id: doc.id  })
    } catch (error) {
      console.log(error);
      
    }
  },
  deleteTask({commit}, payload) {
    db.collection('tasks').doc(payload.id).delete()
      .then(function() {
        commit('deleteTask', payload)
      })
      .catch(function(error) {
        console.error('Error al eliminar', error)
      })
  },
  editTask({commit}, payload) {
    db.collection('tasks').doc(payload.id).update({
      nombre: payload.nombre
    })
    .then(() => {
      commit('updateTask', payload)
      this.app.router.push('/vuex')
    })
    .catch(error => {
      console.log(error);
    })
  }
}