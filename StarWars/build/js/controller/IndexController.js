"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        console.log('IndexController');
    }
    start() {
        console.log('IndexController.start');
        this.view.deploy(this.model.getMovies());
    }
}
exports.default = IndexController;
