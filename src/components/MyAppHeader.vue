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
        <section class="d-flex justify-content-between align-items-center">
            <div>
                <h1> 
                    boolflix
                </h1>
            </div>
            <div>
                <input v-model="store.searchFilm" type="text" placeholder="inserisci qui il film">
                <button @click="$emit('searchBar')">
                    clicca qui
                </button>
            </div>
        </section>
        
    </header>
</template>

<style lang="scss" scoped>
    header{
        background-color: #191919;
        
        section{
            height: 10vh;

            h1{
            color: red;
        }
        }
        
    }
</style>
