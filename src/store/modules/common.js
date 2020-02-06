export default {
  state: {
    processing: false,
    error: null
  },
  mutations: {
    setProcessing(state, processing) {
      state.processing = processing
    },
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    getProcessing: state => state.processing,
    getError: state => state.error
  }
}
