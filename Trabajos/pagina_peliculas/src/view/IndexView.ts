import MovieInterface from "../types/MovieInterface"
import { TrailerInterface } from "../types/TrailerInterface"

export default class IndexView{
    private readonly sec: HTMLDivElement
    private readonly bod: HTMLBodyElement
    constructor (){
       this.sec = document.querySelector('#sec') as HTMLDivElement;
       this.bod = document.body as HTMLBodyElement;
    }

    //La vista admistrara el html y organizar 
    //las películas que consiga

    public async deploy (moviesPromise: Promise<MovieInterface[]>): Promise<void> { //Esta linea es la promesa
        return await moviesPromise.then((movies) => { //Aqui ya son las películas
           movies.forEach((movie) =>{
             this.sec.innerHTML += this.getArticle(movie)
           });
        }).catch((error) => {
            console.error(error);
        });
       
    }

   public async deployTrailer(trailerPromise: Promise<TrailerInterface>) : Promise<void> {
    return await trailerPromise.then((ID) => {
            this.bod.innerHTML += this.getArticleId(ID);
        })
    .catch((error)=>{
        console.error(error);
    });
   }

    getArticle = (movie:MovieInterface): string =>{
        return `
        <div >
        <! -- Se crea un evento para dar clik para redirigir al trailer, el id para buscar la pelicula se dara por la posción que se encuentra --> 
        <a id="${movie.rank}"><img src="${movie.image}" width="100px"></a>
        <div class="txtImg">
            <h4>&nbsp;${movie.rank} ${movie.title} </h4>
            <p>&nbsp;${movie.year} ${(movie.genre !=null) ? movie.genre[0] : ''}</p>
            <p>&nbsp; &#127775; ${(movie.rating)}</p>
        </div>
        <p>${movie.description}</p>
        </div>
        `
    }

    getArticleId = (movieID: TrailerInterface) :string =>{
        return `
        <div class="trailer" id="trailer">
            <div class="videito">
                <a> X </a>
                <iframe src="${movieID.trailer_embed_link}" autoplay=1></iframe>
            </div>
            <div class="info_movie">
                <h2> ${movieID.title}</h2>
                <img src="${movieID.image}" alt="">
                <h1>Official trailer</h1>
                <p>${movieID.description}</p>
            </div>
        </div>
        `
    
    };
    
}