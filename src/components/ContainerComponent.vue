<template>
    <PostComponent :userPost = 'a' v-for="(a, i) in userPosts" :key="i"/>
</template>

<script>

import { mapState } from 'vuex';
import PostComponent from './PostComponent.vue';

export default {
    components: {
        PostComponent,
    },
    computed: {
        ...mapState(['userPosts'])
    }
}
</script>

<style>
    
</style>