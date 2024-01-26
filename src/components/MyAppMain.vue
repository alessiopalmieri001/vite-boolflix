<script >
    import {store} from '../store';
    export default{
        data() {
            return {
                store
            };
        },
        methods: {
            flags(lang){
                let finalFlags = '';
                if (lang == 'en'){
                    finalFlags = 'https://flagicons.lipis.dev/flags/4x3/gb.svg';
                }
                else if (lang == 'ja'){
                    finalFlags = 'https://flagicons.lipis.dev/flags/4x3/jp.svg';
                }
                else{
                    finalFlags = 'https://flagicons.lipis.dev/flags/4x3/' +  lang +'.svg';
                }
                
                return finalFlags;
            }
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
                        lingua:{{ film.original_language }}
                    </div>
                    <div>
                        <img :src="flags(film.original_language)" :alt="film.original_title">
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
    img{
        height: 2rem;
    }
</style>

