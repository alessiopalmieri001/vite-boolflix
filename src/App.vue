<script >
    import MyAppHeader from './components/MyAppHeader.vue';
    import MyAppMain from './components/MyAppMain.vue';
    import MyAppFooter from './components/MyAppFooter.vue';
    import axios from 'axios';
    import {store} from './store';

        export default{
            data() {
                return {
                    store,
                };
            },
            components: {
                MyAppHeader,
                MyAppMain,
                MyAppFooter
            },
            methods: {
                search() {
                    axios
                        //richiesta epi ai
                        .get('https://api.themoviedb.org/3/search/movie',{
                            //parametri 
                            params: {
                                api_key:'234ca3fbd542010fa1945add43865825',
                                query: this.store.searchFilm
                            }
                        })
                        //gestione api ai
                        .then((response) => {
                            console.log(response.data.results);
                            this.store.films = response.data.results;
                            console.log(this.store.films)
                        });
                }
            }
        }
</script>

<template>

    <MyAppHeader @searchBar="search()"/>

    <MyAppMain />

</template>

<style lang="scss">
    @use "assets/scss/partials/reset.scss" as *;
    @use "assets/scss/main.scss" as *;
</style>





