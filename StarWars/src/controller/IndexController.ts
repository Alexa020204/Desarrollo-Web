import IndexModel from "../model/IndexModel";
import IndexView from "../views/IndexView";

export default class IndexController{
    constructor(
        private readonly view: IndexView,
        private readonly model: IndexModel
    ){
        console.log('IndexController')
    }

    public start(): void {
        console.log('IndexController.start');
        this.view.deploy(this.model.getMovies());
    }
}