<template>
    <div v-if="containerState == 0">
        <PostComponent :postNumber='i' :userPost='a' v-for="(a, i) in userPosts" :key="i" />
    </div>

    <div v-if="containerState == 1">
        <div class="upload-image" :class="filterChosen"
        :style="{backgroundImage : `url(${imageUrl})`}"></div>
        <div class="filters">
            <FilterComponent :filter = 'filter' v-for="(filter, i) in filters" :key="i"></FilterComponent>
            
        </div>
    </div>

    <div v-if="containerState == 2">
        <div class="upload-image" :class="filterChosen"
        :style="{backgroundImage : `url(${imageUrl})`}"></div>
        <div class="write">
            <textarea v-model="userWrote" @input="sendText" class="write-box" placeholder="write!">write!</textarea>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import PostComponent from './PostComponent.vue';
import FilterComponent from './FilterComponent.vue';

export default {
    components: {
        PostComponent,
        FilterComponent,
    },
    data() {
        return {
            userWrote: ''
        }
    },
    computed: {
        ...mapState(['userPosts', 'containerState', 'imageUrl', 'filters', 'filterChosen'])
    },
    methods: {
        sendText(){
            this.$store.commit('getText', this.userWrote)
        }
    },
}
</script>

<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
}

.filters {
    overflow-x: scroll;
    white-space: nowrap;
}

.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}

.filters::-webkit-scrollbar {
    height: 5px;
}

.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>