<template>
  <div class="header">
    <ul class="header-button-left" v-if="containerState > 0" @click="$store.commit('toHome')">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right" v-if="containerState == 1" @click="$store.commit('toTextarea')">
      <li>Next</li>
    </ul>
    <ul class="header-button-right" v-if="containerState == 2" @click="$store.commit('publish')">
      <li>Post</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <ContainerComponent />

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change='selectFile' type="file" id="file" class="inputfile" />
      <label v-if="containerState == 0" for="file" class="input-plus">+</label>
    </ul>
  </div>

  <button v-if="(jsonNumber < 2) & (containerState == 0)" @click="morePost">더보기</button>
</template>

<script>

import { mapState } from 'vuex';
import ContainerComponent from './components/ContainerComponent.vue';
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      jsonNumber: 0,
    }
  },
  computed: {
    ...mapState(['containerState'])
  },
  components: {
    ContainerComponent,
  },
  methods: {
    morePost() {
      axios.get(`https://codingapple1.github.io/vue/more${this.jsonNumber}.json`).then((a) => {
        this.$store.commit('pushPost', a.data)
        this.jsonNumber++;
      })
    },
    selectFile(e){
      let fileSelected = e.target.files;
      let url = URL.createObjectURL(fileSelected[0]);
      this.$store.commit('imageUrlChange', url);
      this.$store.commit('toFilterSelect')
    }
  },
}
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
