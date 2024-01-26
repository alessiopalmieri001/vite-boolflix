<script >
    import {store} from '../store';

    export default{
        data() {
            return {
                store
            };
        },
        methods: {

        }
    }
</script>

<template>
    <header>
        <input v-model="store.searchFilm" type="text" placeholder="inserisci qui il film">
        <button @click="$emit('searchBar')">
            clicca qui
        </button>
    </header>
</template>

<style lang="scss" scoped>

</style>
