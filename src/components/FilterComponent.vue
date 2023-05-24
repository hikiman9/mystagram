<template>
    <div :class= filter class="filter-item" @click="$store.commit('filterChange', filter)"
    :style="{backgroundImage : `url(${imageUrl})`}">{{ filter }}</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['imageUrl'])
    },
    props: {
        filter: String
    }
}
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background-position: center;
}
</style>