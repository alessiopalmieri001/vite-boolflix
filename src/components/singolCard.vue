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
    <div>
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
            {{ valutazione }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    img{
        height: 2rem;
    }
</style>

