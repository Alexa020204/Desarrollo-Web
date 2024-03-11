import MovieInterface from "../types/MovieInterface"

export default class IndexView{
    private readonly sec: HTMLDivElement
    constructor (){
       this.sec = document.querySelector('#sec') as HTMLDivElement
    }

    //La vista admistrara el html y organizar 
    //las películas que consiga

    public deploy (moviesPromise: Promise<MovieInterface[]>): void { //Esta linea es la promesa
        moviesPromise.then((movies) => { //Aqui ya son las películas
           movies.forEach((movie) =>{
             this.sec.innerHTML += this.getArticle(movie)
           })
        }).catch((error) => {
            console.error(error)
        })
       
    }

    getArticle = (movie:MovieInterface): string =>{
        return `
        <div>
        <img src="${movie.image}" width="100px">
        <div class="txtImg">
            <h4>&nbsp;${movie.rank} ${movie.title} </h4>
            <p>&nbsp;${movie.year} ${(movie.genre !=null) ? movie.genre[0] : ''}</p>
            <p>&nbsp; &#127775; ${(movie.rating)}</p>
        </div>
        <p>${movie.description}</p>
        </div>
        `
    }
    
}