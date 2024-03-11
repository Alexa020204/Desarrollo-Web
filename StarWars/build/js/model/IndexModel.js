"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class IndexModel {
    constructor() {
        console.log('IndexModel');
    }
    getMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                const response = fetch('https://imdb146.p.rapidapi.com/v1/find/?query=starwars', {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '96eac3d943msh39121728d11ddbep18fdc2jsn7ab6928a8cfe',
                        'X-RapidAPI-Host': 'imdb146.p.rapidapi.com',
                    }
                });
                response
                    .then((data) => __awaiter(this, void 0, void 0, function* () {
                    const movies = yield data.json();
                    resolve((yield movies).titleResults.results);
                }))
                    .catch((error) => {
                    reject(error);
                });
            });
        });
    }
}
exports.default = IndexModel;
