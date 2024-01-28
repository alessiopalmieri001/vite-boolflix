<script >
    import singolCard from './singolCard.vue';
    import {store} from '../store';
    export default{
        data() {
            return {
                store
            };
        },
        components:{
            singolCard
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
            <h2>
                film
            </h2>
            <ul>
                <li v-for="(film, i) in store.films" :key="i">
                    <singolCard 
                        :titleName="film.title"
                        :originalName="film.original_title"
                        :originalLanguage="film.original_language"
                        :valutazione="film.vote_average"
                        :poster="film.poster_path"
                    />
                    <hr>
                </li>
            </ul>
        </div>
        <hr>
        <div>
            <h2>
                serietv
            </h2>
            <ul>
                <li v-for="(serie, y) in store.serieTv" :key="y">
                    <singolCard 
                        :titleName="serie.name"
                        :originalName="serie.original_name"
                        :originalLanguage="serie.original_language"
                        :valutazione="serie.vote_average"
                        :poster="serie.poster_path"
                    />
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

