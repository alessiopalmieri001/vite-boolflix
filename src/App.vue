<script >
    import MyAppHeader from './components/MyAppHeader.vue';
    import MyAppMain from './components/MyAppMain.vue';
    import MyAppFooter from './components/MyAppFooter.vue';
    import axios from 'axios';
        export default{
            data() {
                return {
                    searchFilm:'',
                    films: [],
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
                        .get('https://api.themoviedb.org/3/search/movie',{
                            params: {
                                api_key:'234ca3fbd542010fa1945add43865825',
                                query: this.searchFilm
                            }
                        })
                        .then((response) => {
                            console.log(response.data.results);
                            this.films = response.data.results;
                            console.log(this.films)
                        });
                }
            }
        }
</script>

<template>
    <header>
        <input v-model="searchFilm" type="text" placeholder="inserisci qui il film">
        <button @click="search()">
            clicca qui
        </button>
    </header>
    <main>
        <div>
            <ul>
                <li v-for="(film, i) in films" :key="i">
                    {{ film }}
                </li>
            </ul>
        </div>
    </main>




    <!-- <h1>
        Mia app
    </h1>
    <MyAppHeader />
    <MyAppMain />
    <MyAppFooter /> -->
</template>

<style lang="scss">
@use "assets/scss/partials/reset.scss" as *;
@use "assets/scss/main.scss" as *;
</style>
