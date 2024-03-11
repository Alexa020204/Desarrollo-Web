export default class IndexView {
    constructor() {
        this.getArticle = (movie) => {
            return `
        <div>
        <img src="${movie.image}" width="100px">
        <div class="txtImg">
            <h4>&nbsp;${movie.rank} ${movie.title} </h4>
            <p>&nbsp;${movie.year} ${(movie.genre != null) ? movie.genre[0] : ''}</p>
            <p>&nbsp; &#127775; ${(movie.rating)}</p>
        </div>
        <p>${movie.description}</p>
        </div>
        `;
        };
        this.sec = document.querySelector('#sec');
    }
    //La vista admistrara el html y organizar 
    //las películas que consiga
    deploy(moviesPromise) {
        moviesPromise.then((movies) => {
            movies.forEach((movie) => {
                this.sec.innerHTML += this.getArticle(movie);
            });
        }).catch((error) => {
            console.error(error);
        });
    }
}
