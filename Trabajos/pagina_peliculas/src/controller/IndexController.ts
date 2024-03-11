
import IndexModel from "../model/IndexModel.js";
import IndexView from "../view/IndexView.js";

export default class IndexController{
    constructor (
        private readonly view: IndexView,
        private readonly model: IndexModel
     ){
        console.log('IndexController')
    }



    public start(): void {
        this.view.deploy(this.model.getMovies()).then(() => {
          this.showTrailer();
        });
    }
    async showTrailer(): Promise<void> {
        const peliculas = document.querySelectorAll(".wrapper a");
        peliculas.forEach((trailer) => {
            trailer.addEventListener(
                "click",
               ()=> {
                    console.log(trailer.id);
                    this.view.deployTrailer(this.model.getTrailer(parseInt(trailer.id)));
                },
               
            );
        });
    }

    
}