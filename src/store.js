import { createStore } from 'vuex'
import userPosts from './assets/userPosts.js'

const store = createStore({
  state(){
    return {
      userPosts : userPosts,
    }
  },
  mutations:{
    pushPost(state, data){
        state.userPosts.push(data)
    }
  }
})

export default store