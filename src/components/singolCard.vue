<script >
    export default{
        data() {
            return {

            };
        },
        props: {
            titleName: String,
            originalName: String,
            originalLanguage:String,
            valutazione: Number,
            poster: String, 
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
            },
            starVoted(){
                return Math.ceil(this.valutazione / 2);
            }
        }
    }
</script>

<template>
    <div>
        <div>
            <img class="img-poster" :src="'https://image.tmdb.org/t/p/w342' + poster" :alt="titleName">
        </div>
        <div>
            {{ titleName }}
        </div>
        <div>
            {{ originalName}}
        </div>
        <div>
            {{ originalLanguage}}
        </div>
        <div>
            <img :src="flags(originalLanguage)" :alt="titleName">
        </div>
        <div>
            {{ starVoted() }}
        </div>
        <div>
            <i v-for="i in starVoted()" :key="i" class="fa-solid fa-star"></i>
            <i v-for="j in (5 - starVoted())" :key="j" class="fa-regular fa-star"></i>

        </div>
        
        
    </div>
</template>

<style lang="scss" scoped>
    img{
        height: 2rem;
    }
    .img-poster{
        height: 150px;
    }           
</style>

