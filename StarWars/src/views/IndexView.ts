import { TitleResultsResult } from "../types/MoviesInterface";

export default class IndexView{

    private readonly sec: HTMLDivElement;

    constructor(){
        this.sec =document.querySelector('#card') as HTMLDivElement;
    }

    public deploy(moviesPromise: Promise<TitleResultsResult[]>): void {
        moviesPromise.then((movies) => {
            movies.forEach((movie) => {
                this.sec.innerHTML += this.getArticle(movie)
            }) 
        }).catch((error)=> {
            console.log(error)
        })
    }

    getArticle = (movie:TitleResultsResult): string => {
        return `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${movie.titlePosterImageModel.url}" alt="${movie.titleNameText}">
        <div class="card-body">
        <p class="card-text">${movie.titleNameText}</p>
        </div>
        </div>
        `
    }

}