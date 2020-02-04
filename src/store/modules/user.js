export default {
  state: {
    user: {
      isAuth: false,
      uid: null
    }
  },
  mutations: {
    signUp(store, data) {
      console.log(data)
    }
  }
}
