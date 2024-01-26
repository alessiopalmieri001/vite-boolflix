import { reactive } from "vue";

export const store = reactive ({
    //input di testo
    searchFilm:'',
    //array vuoto dove finiranno le richieste dell'utente tramite input di testo
    films: [],
    serieTv:[],
});