import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: {},
    userName: ''
  },
  mutations: {
    setPosition (state, val) {
      state.position = val
    },
    setUserName (state, val) {
      state.userName = val
    }
  },
  actions: {
    setPosition ({ commit }, val) {
      commit('setPosition', val)
    }
  },
  modules: {
  }
})
