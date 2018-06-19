import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    strict: false,
    state: {
      formsInAction: {}
    },
    mutations: {
      add(state, payload) {
        state.formsInAction[payload.id] = payload
      },
      remove(state, payload) {
        delete state.formsInAction[payload.id];
      }
    }
  })
}

export default createStore
