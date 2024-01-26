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
    <main>
        <div>
            <ul>
                <li v-for="(film, i) in store.films" :key="i">
                    <div>
                        titolo:{{ film.title }}
                    </div>
                    <div>
                        titolo originale:{{ film.original_title }}
                    </div>
                    <div>
                        divngua:{{ film.original_language }}
                    </div>
                    <div>
                        voto:{{ film.vote_average }}
                    </div>
                    <hr>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>

