import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(Vuex)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

const URL = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple'

const store = new Vuex.Store({
  state: {
    questions: [],
    correct_answer: 0,
    total_answered: 0
  },
  mutations: {
    correct_inc(state) {
      state.correct_answer++
    },
    total_inc(state) {
      state.total_answered++
    },
    set_questions(state, data){
      state.questions = data
    }
  },
  actions: {
    get_questions({ commit }) {
      fetch(URL, {
            method: 'get'
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            commit('set_questions', jsonData.results)
        })
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App),
}).$mount('#app')
