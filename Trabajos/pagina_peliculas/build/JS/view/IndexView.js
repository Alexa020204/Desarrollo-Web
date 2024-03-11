var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class IndexView {
    constructor() {
        this.getArticle = (movie) => {
            return `
        <div >
        <! -- Se crea un evento para dar clik para redirigir al trailer, el id para buscar la pelicula se dara por la posción que se encuentra --> 
        <a id="${movie.rank}"><img src="${movie.image}" width="100px"></a>
        <div class="txtImg">
            <h4>&nbsp;${movie.rank} ${movie.title} </h4>
            <p>&nbsp;${movie.year} ${(movie.genre != null) ? movie.genre[0] : ''}</p>
            <p>&nbsp; &#127775; ${(movie.rating)}</p>
        </div>
        <p>${movie.description}</p>
        </div>
        `;
        };
        this.getArticleId = (movieID) => {
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
        `;
        };
        this.sec = document.querySelector('#sec');
        this.bod = document.body;
    }
    //La vista admistrara el html y organizar 
    //las películas que consiga
    deploy(moviesPromise) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield moviesPromise.then((movies) => {
                movies.forEach((movie) => {
                    this.sec.innerHTML += this.getArticle(movie);
                });
            }).catch((error) => {
                console.error(error);
            });
        });
    }
    deployTrailer(trailerPromise) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield trailerPromise.then((ID) => {
                this.bod.innerHTML += this.getArticleId(ID);
            })
                .catch((error) => {
                console.error(error);
            });
        });
    }
}
