import { createStore } from 'vuex'
import userPosts from './assets/userPosts.js'

const store = createStore({
  state() {
    return {
      userPosts: userPosts,
      containerState: 0,
      imageUrl: '',
      filterChosen: '',
      newPost: {
        name: "Um Junsik",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: "",
        likes: 0,
        date: "May 24",
        liked: false,
        content: "",
        filter: "perpetua"
      },
      filters: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
      "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
      "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },
  mutations: {
    pushPost(state, data) {
      state.userPosts.push(data)
    },
    toFilterSelect(state) {
      state.containerState = 1;
    },
    toTextarea(state) {
      state.containerState = 2;
    },
    toHome(state) {
      state.containerState = 0;
    },
    imageUrlChange(state, data) {
      state.imageUrl = data;
    },
    filterChange(state, data){
      state.filterChosen = data;
      console.log(state.filterChosen)
    },
    getText(state, data){
      state.newPost.content = data;
    },
    publish(state){
      state.newPost.postImage = state.imageUrl
      state.newPost.filter = state.filterChosen
      state.userPosts.unshift(state.newPost)
      state.containerState = 0;
    },
    likePost(state, data){
      if (state.userPosts[data].liked == false) {
        state.userPosts[data].likes ++;
        state.userPosts[data].liked = true;
      } else{
        state.userPosts[data].likes --;
        state.userPosts[data].liked = false;
      }
    }
  }
})

export default store