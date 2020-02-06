import { auth } from 'firebase'

export default {
  state: {
    user: {
      isAuth: false,
      uid: null
    }
  },
  actions: {
    signUp(state, data) {
      state.commit('clearError')
      state.commit('setProcessing', true)
      auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .catch(err => {
          state.commit('setError', err.message)
        })
        .finally(() => {
          state.commit('setProcessing', false)
        })
    },

    signIn(state, data) {
      state.commit('clearError')
      state.commit('setProcessing', true)
      auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .catch(err => {
          state.commit('setError', err.message)
        })
        .finally(() => {
          state.commit('setProcessing', false)
        })
    },

    signOut(state) {
      state.commit('clearError')
      state.commit('setProcessing', true)
      auth()
        .signOut()
        .catch(err => {
          state.commit('setError', err.message)
        })
        .finally(() => {
          state.commit('setProcessing', false)
        })
    },

    changeAuthState(state, user) {
      state.commit('setUser', user)
    }
  },
  mutations: {
    setUser(state, user) {
      if (user) {
        state.user.isAuth = true
        state.user.uid = user.uid
      } else {
        state.user.isAuth = false
        state.user.uid = null
      }
    }
  },
  getters: {
    isUserAuthenticated: state => state.user.isAuth
  }
}
